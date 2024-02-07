import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Profile from "./components/Profile";
import AddDiaryPage from "./pages/AddDiaryPage";
import LoginPage from "./pages/LoginPage";
import CommPage from "./pages/CommPage";
import CommDetailPage from "./pages/CommDetailPage";
import MyDiaryPage from "./pages/MyDiaryPage";
import ProfilePageLike from "./pages/ProfilePage_Like";
import ProfilePageEdit from "./pages/ProfilePage_Edit";
import ProfilePageComment from "./pages/ProfilePage_Comments";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="mprof" element={<Profile />}>
          <Route path="view" element={<ProfilePage />} />
          <Route path="edit" element={<ProfilePageEdit />} />
          <Route path="like" element={<ProfilePageLike />} />
          <Route path="comment" element={<ProfilePageComment />} />
        </Route>
        <Route path="mydiary" element={<MyDiaryPage />} />
        <Route path="adddiary" element={<AddDiaryPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="comm">
          <Route index element={<CommPage />} />
          <Route path="diaryId" element={<CommDetailPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
