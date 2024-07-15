import React from "react";
import * as S from "./Comment.styled";
import { useDeleteCommentMutation } from "../../features/diaries/diaryApiSlice";
import { deleteComment } from "../../features/diaries/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectCurrentUser);
  const [deletion, { isLoading: isDeleteLoading }] = useDeleteCommentMutation();

  const onDeleteBtnClick = async () => {
    if (window.confirm("댓글을 삭제 하시겠습니까?")) {
      try {
        await deletion(comment.id).unwrap();
        dispatch(deleteComment(comment.id));
        alert("댓글이 삭제되었습니다.");
      } catch (err) {
        console.error("댓글 삭제에 실패했습니다.", err);
        alert("댓글 주인만 삭제할 수 있습니다.");
      }
    }
  };
  return (
    <S.Comments>
      <S.CommentsUser>{comment.userInfo.nickname}</S.CommentsUser>
      <S.CommentContent>{comment.content}</S.CommentContent>
      {userInfo.id === comment.userInfo.id && (
        <S.CommentActions>
          <S.CommentDeleteButton onClick={onDeleteBtnClick}>
            삭제
          </S.CommentDeleteButton>
        </S.CommentActions>
      )}
    </S.Comments>
  );
};

export default Comment;
