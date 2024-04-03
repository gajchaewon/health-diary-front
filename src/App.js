import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/home/Homepage";
import Profile from "./components/Profile";
import AddEditDiaryPage from "./pages/diary/add_edit_diary/AddEditDiaryPage";
import LoginPage from "./pages/login/LoginPage";
import CommPage from "./pages/community/CommPage";
import DiaryDetailPage from "./pages/diary/detail/DiaryDetailPage";
import MyDiaryPage from "./pages/diary/personal_diary/MyDiaryPage";
import ProfilePageLike from "./pages/profile/profile_like/ProfilePage_Like";
import ProfilePageEdit from "./pages/profile/profile_edit/ProfilePage_Edit";
import ProfilePageComment from "./pages/profile/profile_comment/ProfilePage_Comments";
import ProfilePage from "./pages/profile/ProfilePage";
import SignupPage from "./pages/signup/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="mprof" element={<Profile />}>
          <Route path="view" element={<ProfilePage />} />
          <Route path="edit" element={<ProfilePageEdit />} />
          <Route path="like" element={<ProfilePageLike />} />
          <Route path="comment" element={<ProfilePageComment />} />
        </Route>
        <Route path="my" element={<MyDiaryPage />} />
        <Route path="adddiary" element={<AddEditDiaryPage />} />
        <Route path="editdiary/:diaryId" element={<AddEditDiaryPage />} />
        <Route path="comm" element={<CommPage />} />
        <Route path="diary/:diaryId" element={<DiaryDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
