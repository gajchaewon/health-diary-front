import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const Layout = () => {
  const token = useSelector(selectCurrentToken);

  // 토큰이 유효한지 검증하는 함수
  const isValidToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      // 여기에서 토큰의 유효성을 검증하는 추가적인 로직을 수행할 수 있습니다.
      // 예를 들어, 만료 시간을 확인하여 토큰의 유효성을 검증할 수 있습니다.

      return true; // 토큰이 유효하다면 true 반환
    } catch (error) {
      return false; // 토큰이 유효하지 않다면 false 반환
    }
  };

  // 토큰이 존재하고 유효한지를 확인하는 함수
  const isLoggedIn = token && isValidToken(token);

  return (
    <>
      <div>
        <Header token={token} isLoggedIn={isLoggedIn} />
        <main className="App">
          {/* 아웃렛에서는 props 전달을 context로 함 */}
          <Outlet context={{ isLoggedIn, token }} />
        </main>
      </div>
    </>
  );
};

export default Layout;
