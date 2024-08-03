import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/home/Homepage";
import Profile from "./components/profile/MyProfile";
import AddEditDiaryPage from "./pages/diary/add_edit_diary/AddEditDiaryPage";
import LoginPage from "./pages/login/LoginPage";
import CommPage from "./pages/community/CommPage";
import DiaryDetailPage from "./pages/diary/detail/DiaryDetailPage";
import MyDiaryRoutine from "./components/my/MyDiaryRoutine";
import MyDiaryPage from "./pages/diary/personal_diary/MyDiaryPage";
import ProfilePageLike from "./pages/profile/profile_like/ProfilePage_Like";
import ProfilePageEdit from "./pages/profile/profile_edit/ProfilePage_Edit";
import ProfilePageComment from "./pages/profile/profile_comment/ProfilePage_Comments";
import ProfilePage from "./pages/profile/ProfilePage";
import SignupPage from "./pages/signup/SignupPage";
import PrivateRoute from "./PrivateRoute";
import FollowNavigation from "./components/follow/FollowNavigation";
import ProfilePageFollower from "./pages/profile/profile_follow/ProfilePage_Follower";
import ProfilePageFollowing from "./pages/profile/profile_follow/ProfilePage_Following";
import UserProfile from "./components/profile/UserProfile";
import UProfilePageView from "./pages/user_profile/user_view/UProfilePage_view";
import UProfilePageDiaries from "./pages/user_profile/user_diaries/UProfilePage_diaries";
import UProfilePageFollower from "./pages/user_profile/user_follow/UProfilePage_follower";
import UProfilePageFollowing from "./pages/user_profile/user_follow/UProfilePage_following";
import RoutinePage from "./pages/routines/RoutinePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route
          path="mprof"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          <Route path="view" element={<ProfilePage />} />
          <Route path="edit" element={<ProfilePageEdit />} />
          <Route path="follow" element={<FollowNavigation />}>
            <Route path="follower" element={<ProfilePageFollower />} />
            <Route path="following" element={<ProfilePageFollowing />} />
          </Route>
          <Route path="like" element={<ProfilePageLike />} />
          <Route path="comment" element={<ProfilePageComment />} />
        </Route>
        <Route path="user/:userId" element={<UserProfile />}>
          <Route path="view" element={<UProfilePageView />} />
          <Route path="diaries" element={<UProfilePageDiaries />} />
          <Route path="follow" element={<FollowNavigation />}>
            <Route path="follower" element={<UProfilePageFollower />} />
            <Route path="following" element={<UProfilePageFollowing />} />
          </Route>
        </Route>

        <Route
          path="my"
          element={
            <PrivateRoute>
              <MyDiaryRoutine />
            </PrivateRoute>
          }
        >
          <Route path="diaries" element={<MyDiaryPage />} />
          <Route path="routine" element={<RoutinePage />} />
        </Route>
        <Route
          path="adddiary"
          element={
            <PrivateRoute>
              <AddEditDiaryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="editdiary/:diaryId"
          element={
            <PrivateRoute>
              <AddEditDiaryPage />
            </PrivateRoute>
          }
        />
        <Route path="comm" element={<CommPage />} />
        <Route path="diary/:diaryId" element={<DiaryDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
