import styled from 'styled-components';

export const StatisticsItem = styled.li`
  &:nth-last-child(-n + 2) {
    margin-top: 30px;
    &:last-child {
      margin-top: 10px;
    }
  }
`;
export const StatisticsText = styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.06em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 10px;
`;
