import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";

const Layout = () => {
  const token = useSelector(selectCurrentToken);

  return (
    <>
      <div>
        <Header token={token} />
        <main className="App">
          {/* 아웃렛에서는 props 전달을 context로 함 */}
          <Outlet context={{ token }} />
        </main>
      </div>
    </>
  );
};

export default Layout;
