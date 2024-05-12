import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isTokenExist = useSelector(selectCurrentToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenExist === null) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, []);

  if (!isTokenExist) {
    return null;
  }

  return <>{children}</>;
};
export default PrivateRoute;
