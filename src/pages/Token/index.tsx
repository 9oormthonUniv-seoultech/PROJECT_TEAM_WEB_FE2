import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { axiosInstance } from "../../api";
import { saveShare } from "../../api/share";

function Token() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  useEffect(() => {
    const fetchLogin = async () => {
      const query = new URLSearchParams(location.search);
      const token = query.get("accessToken");
      if (token) {
        useAuthStore.setState({ accessToken: token });
        login();

        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        if (localStorage.getItem("shareId")) {
          const res = await saveShare(token, localStorage.getItem("shareId")!);
          if (res) {
            alert("사진 등록이 완료되었습니다.");
            localStorage.removeItem("shareId");
            navigate("/album");
          }
        }
        navigate("/home");
      }
    };
    fetchLogin();
  }, [location.search, navigate]);
  return <div></div>;
}

export default Token;
