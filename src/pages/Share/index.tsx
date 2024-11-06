import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { saveShare } from "../../api/share";

function Share() {
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchShare = async () => {
      const query = new URLSearchParams(location.search);
      const token = query.get("token");
      console.log(token);
      if (token) {
        if (accessToken) {
          const res = await saveShare(accessToken, token);
          if (res) {
            alert("사진 등록이 완료되었습니다.");
            navigate("/album");
          }
        } else {
          localStorage.setItem("shareId", token!);
          alert("로그인 해야 사진 저장이 가능해요!");
          navigate("/login");
        }
      }
    };
    fetchShare();
  }, [location.search]);
  return <div></div>;
}

export default Share;
