import React, { useState } from "react";
import styled from "styled-components";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
  margin-top: 5px;
  border: 1px solid #ccc;
  background-color: aliceblue;
  border-radius: 0.2rem;
`;

const Tag = styled.div`
  display: flex;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 1.5rem;
  border: 0.3px solid #79affc;
`;

const DeleteButton = styled.button`
  display: flex;
  margin-left: 6px;
  cursor: pointer;
  border: none;
  color: #007fff;
  background-color: transparent;
  align-self: center;
  justify-self: center;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 10px;
  font-size: 16px;
`;

function TagInput() {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input) {
      setTags([...tags, input]);
      setInput("");
    } else if (e.key === "Backspace" && !input) {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  const handleDelete = (index) => {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)]);
  };

  return (
    <Container>
      {tags.map((tag, index) => (
        <Tag key={index}>
          {tag}
          <DeleteButton onClick={() => handleDelete(index)}>
            <HighlightOffRoundedIcon sx={{ fontSize: 20 }} />
          </DeleteButton>
        </Tag>
      ))}
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="태그 입력"
      />
    </Container>
  );
}

export default TagInput;
