import { StatisticsItem, StatisticsText } from './Statistics.styled';
import propTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <StatisticsItem>
          <StatisticsText>Good: {good}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>Neutral: {neutral}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>Bad: {bad}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>Total: {total}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>
            Positive feedback: {positivePercentage}%
          </StatisticsText>
        </StatisticsItem>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
