import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 100px 150px;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin: 15px 0;
  background-color: aliceblue;
  width: 40%;
`;

export const ContentWrapper = styled.div`
  background-color: aliceblue;
  margin: 15px 0;
  width: 80%;
`;

export const TagnIconsContainer = styled.div`
  margin: 15px 0;
  width: 80%;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const TagWrapper = styled.div`
  width: 40%;
`;

export const IconsContainer = styled.div`
  width: 18%;
  display: flex;
  justify-content: space-between;
`;

export const SubmitBtnWrapper = styled.div`
  justify-content: flex-end;
`;

export const PreviewnBtnContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: relative;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const PrevButton = styled.button`
  width: fit-content;
  position: absolute;
  left: 0vw;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const NextButton = styled(PrevButton)`
  left: 38vw;
`; // PrevButton과 동일한 스타일을 사용

export const DeleteButton = styled.button`
  position: absolute;
  left: 40vw;
  bottom: 0.5vh;
  padding: 10px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImagePreview = styled.img`
  width: 43vw;
  height: 35vh;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.1);
`;
