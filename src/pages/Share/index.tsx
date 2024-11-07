import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { saveShare } from "../../api/share";
import { useAlertStore } from "../../store/useAlertStore";

function Share() {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();
  const { openAlert } = useAlertStore();
  useEffect(() => {
    const fetchShare = async () => {
      const query = new URLSearchParams(location.search);
      const token = query.get("token");
      console.log(token);
      if (token) {
        if (accessToken) {
          const res = await saveShare(accessToken, token);
          if (res === 200) {
            openAlert("사진 등록이 완료되었습니다.");
            navigate("/album");
          } else if (res === 409) {
            //작성자가 공유링크에 접속하였을 경우
            navigate("/album");
          } else if (res === 400) {
            openAlert("유효하지 않은 공유링크입니다.");
            navigate("/home");
          } else {
            openAlert("잠시후 다시 시도해주세요.");
            navigate("/album");
          }
        } else {
          localStorage.setItem("shareId", token!);
          openAlert("로그인 해야 사진 저장이 가능해요!");
          navigate("/login");
        }
      }
    };
    fetchShare();
  }, [location.search]);
  return <div></div>;
}

export default Share;
