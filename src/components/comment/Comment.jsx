import React, { useState } from "react";
import * as S from "./Comment.styled";
import {
  useDeleteCommentMutation,
  useEditCommentMutation,
} from "../../features/diaries/diaryApiSlice";
import { deleteComment, editComment } from "../../features/diaries/diarySlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";
import moment from "moment";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectCurrentUser);
  const [deletion, { isLoading: isDeleteLoading }] = useDeleteCommentMutation();
  const [editing, { isLoading: isEditLoading }] = useEditCommentMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(comment.content);
  const onContentChange = (e) => setContent(e.target.value);

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

  const onEditBtnClick = async () => {
    try {
      await editing({
        commentId: comment.id,
        content: content,
      }).unwrap();

      setIsEdit(false);
    } catch (err) {
      console.error("댓글 수정에 실패했습니다.", err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEditBtnClick();
    }
  };

  return (
    <S.CommentContainer>
      <S.CommentsUser to={`/user/${comment.userInfo.id}/view`}>
        {comment?.userInfo?.nickname}
      </S.CommentsUser>
      {!isEdit ? (
        <>
          <S.CommentContent>{comment?.content}</S.CommentContent>
          <S.CommentDate>
            {moment(moment.modifiedAt).format("YYYY-MM-DD")}
          </S.CommentDate>
          {userInfo?.id === comment.userInfo?.id && (
            <S.CommentActions>
              <S.CommentButton onClick={() => setIsEdit(true)}>
                수정
              </S.CommentButton>
              <S.CommentButton onClick={onDeleteBtnClick}>삭제</S.CommentButton>
            </S.CommentActions>
          )}
        </>
      ) : (
        <>
          <S.CommentTextarea>
            <S.CommentInput
              value={content}
              onChange={onContentChange}
              rows={3}
              onKeyDown={handleKeyDown}
            />
          </S.CommentTextarea>
          <S.CommentActions>
            <S.CommentButton>취소</S.CommentButton>
            <S.CommentButton onClick={onEditBtnClick}>수정</S.CommentButton>
          </S.CommentActions>
        </>
      )}
    </S.CommentContainer>
  );
};

export default Comment;
