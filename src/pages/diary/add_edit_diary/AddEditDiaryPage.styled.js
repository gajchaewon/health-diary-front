import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 0px 150px;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin: 15px 0;
  background-color: aliceblue;
  width: 40%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 60%;
`;

export const TagnIconsContainer = styled.div`
  margin: 15px 0;
  width: 60%;
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
  margin-left: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 1px solid #bbbfc3;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PrevButton = styled.button`
  width: fit-content;
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const NextButton = styled(PrevButton)`
  left: 94%;
`; // PrevButton과 동일한 스타일을 사용

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 93%;
  bottom: 6%;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.1);
`;
