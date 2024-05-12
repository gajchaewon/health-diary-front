import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isTokenExist = useSelector(selectCurrentToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTokenExist) {
      navigate("/login");
      alert("로그인이 필요합니다.");
    }
  }, [isTokenExist, navigate]);

  if (!isTokenExist) {
    return null;
  }

  return <>{children}</>;
}
export default PrivateRoute;
