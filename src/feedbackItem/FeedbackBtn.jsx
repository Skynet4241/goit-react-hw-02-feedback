import { Component } from 'react';
import {
  FeedbackHeading,
  FeedbackBtnList,
  FeedbackButton,
} from './FeedbackBtn.styled';

export class FeedbackBtn extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  clickBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  clickBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <FeedbackHeading>Please leave feedback</FeedbackHeading>
        <FeedbackBtnList>
          <li>
            <FeedbackButton onClick={this.clickBtnGood}>Good</FeedbackButton>
          </li>
          <li>
            <FeedbackButton onClick={this.clickBtnNeutral}>
              Neutral
            </FeedbackButton>
          </li>
          <li>
            <FeedbackButton onClick={this.clickBtnBad}>Bad</FeedbackButton>
          </li>
        </FeedbackBtnList>
        <h3>Statistic</h3>
        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p>Total: {this.countTotalFeedback()}</p>
          </li>
          <li>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </li>
        </ul>
      </>
    );
  }
}
