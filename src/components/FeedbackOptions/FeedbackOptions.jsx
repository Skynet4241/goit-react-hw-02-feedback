import { FeedbackBtnList, FeedbackButton } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackBtnList>
    {options.map((item, index) => (
      <li key={index}>
        <FeedbackButton onClick={() => onLeaveFeedback(item)}>
          {item}
        </FeedbackButton>
      </li>
    ))}
  </FeedbackBtnList>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
