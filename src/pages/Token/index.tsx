import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { axiosInstance } from "../../api";

function Token() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  useEffect(() => {
    const fetchLogin = async () => {
      const query = new URLSearchParams(location.search);
      const token = query.get("accessToken");
      const refresh = query.get("refreshToken");
      if (token) {
        useAuthStore.setState({ accessToken: token });
        useAuthStore.setState({ refreshToken: refresh });
        login();
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        navigate("/home");
      }
    };
    fetchLogin();
  }, [location.search, navigate]);
  return <div></div>;
}

export default Token;
