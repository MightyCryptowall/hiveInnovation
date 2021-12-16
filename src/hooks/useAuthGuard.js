import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuthGuard = () => {
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth);

  const handleAuth = () => {
    if (!authStatus.accessToken) {
      navigate("/login");
    }
  };

  useEffect(handleAuth, [handleAuth]);
};

export default useAuthGuard;
