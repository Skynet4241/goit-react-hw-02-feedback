import styled from 'styled-components';

export const FeedbackBtnList = styled.ul`
  display: flex;
  gap: 10px;
`;
export const FeedbackButton = styled.button`
  padding: 10px 32px;
  max-width: 100px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.7;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: #2694ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0f71c1;
  }
  margin-bottom: 30px;
`;
