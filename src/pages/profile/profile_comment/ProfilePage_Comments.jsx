import React from "react";
import * as S from "./ProfilePage_Comments.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetCommentedDiaryQuery } from "../../../features/profile/profileApiSlice";
import moment from "moment";

const ProfilePageComment = () => {
  const { data: fetchComments, isLoading } = useGetCommentedDiaryQuery();

  return (
    <div>
      {console.log(fetchComments)}
      <S.Comments>내 커뮤니티 댓글</S.Comments>
      {fetchComments?.comments.map((comment) => (
        <S.CommentsContainer key={comment.id}>
          <S.DeleteBtn>
            <DeleteIcon />
          </S.DeleteBtn>
          <S.Comment>
            {comment?.content.length > 30 ? (
              <>{comment.content.slice(0, 30)}...</>
            ) : (
              <>{comment.content}</>
            )}
          </S.Comment>
          <S.DiaryLinkWrapper>
            <S.DiaryLink to={`/diary/${comment.diary.id}`}>
              {comment.diary.title}
            </S.DiaryLink>
            에 남긴 댓글
          </S.DiaryLinkWrapper>
          <S.Date>{moment(comment.modifiedAt).format("YYYY-MM-DD")}</S.Date>
        </S.CommentsContainer>
      ))}
    </div>
  );
};

export default ProfilePageComment;
