import {
  FeedbackBtnList,
  FeedbackButton,
} from 'feedbackItem/FeedbackBtn.styled';
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
