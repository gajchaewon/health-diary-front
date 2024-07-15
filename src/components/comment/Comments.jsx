import React, { useState } from "react";
import * as S from "./Comments.styled";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSingleDiary } from "../../features/diaries/diarySlice";
import { addComment } from "../../features/diaries/diarySlice";
import { useAddCommentMutation } from "../../features/diaries/diaryApiSlice";
import { useDispatch } from "react-redux";
import Comment from "./Comment";

const Comments = ({ diaryId }) => {
  const dispatch = useDispatch();
  const currentDiary = useSelector(selectSingleDiary);
  const [addingComment, { isLoading: isAddLoading }] = useAddCommentMutation();
  const [content, setContent] = useState("");
  const onContentChange = (e) => setContent(e.target.value);
  const comments = currentDiary.comments;

  const onAddBtnClick = async () => {
    if (!isAddLoading) {
      try {
        const commentData = await addingComment({
          diaryId,
          content,
        }).unwrap();
        dispatch(addComment({ ...commentData }));
        setContent("");
      } catch (err) {
        console.log(err);
        if (err.data?.statusCode === 400) {
          alert(err.data?.validation?.content);
        }
      }
    }
  };

  return (
    <S.CommentContainer>
      comment({comments?.length})
      <S.CommentTextarea>
        <TextField
          onChange={onContentChange}
          value={content}
          id="outlined-textarea"
          label="comment"
          placeholder="댓글을 적어주세요"
          multiline
          fullWidth
          color="grey"
        />
        <S.CommentTextareaBtn onClick={onAddBtnClick}>
          작성
        </S.CommentTextareaBtn>
      </S.CommentTextarea>
      {currentDiary.comments &&
        currentDiary.comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </S.CommentContainer>
  );
};

export default Comments;
