import React from "react";
import * as S from "./Comment.styled";
import { useDeleteCommentMutation } from "../../features/diaries/diaryApiSlice";
import { deleteComment } from "../../features/diaries/diarySlice";
import { useDispatch } from "react-redux";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [deletion, { isLoading: isDeleteLoading }] = useDeleteCommentMutation();

  const onDeleteBtnClick = async () => {
    if (window.confirm("댓글을 삭제 하시겠습니까?")) {
      try {
        await deletion(comment.id).unwrap();
        dispatch(deleteComment(comment.id));
        alert("다이어리가 삭제되었습니다.");
      } catch (err) {
        console.error("댓글 삭제에 실패했습니다.", err);
      }
    }
  };
  return (
    <S.Comments>
      <S.CommentsUser>{comment.nickname}</S.CommentsUser>
      {comment.content}
      <div>
        <button onClick={onDeleteBtnClick}>삭제</button>
      </div>
    </S.Comments>
  );
};

export default Comment;
