import { Component } from 'react';
import { FeedbackHeading } from './FeedbackBtn.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
export class FeedbackBtn extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };
  //   clickBtnGood = () => {
  //     this.setState(prevState => {
  //       return {
  //         good: prevState.good + 1,
  //       };
  //     });
  //   };
  //   clickBtnNeutral = () => {
  //     this.setState(prevState => {
  //       return {
  //         neutral: prevState.neutral + 1,
  //       };
  //     });
  //   };
  //   clickBtnBad = () => {
  //     this.setState(prevState => {
  //       return {
  //         bad: prevState.bad + 1,
  //       };
  //     });
  //   };

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
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.feedbackHandler}
        />
        {/* <FeedbackBtnList>
          <li>
            <FeedbackButton onClick={this.feedbackHandler}>Good</FeedbackButton>
          </li>
          <li>
            <FeedbackButton onClick={this.feedbackHandler}>
              Neutral
            </FeedbackButton>
          </li>
          <li>
            <FeedbackButton onClick={this.feedbackHandler}>Bad</FeedbackButton>
          </li>
        </FeedbackBtnList> */}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
