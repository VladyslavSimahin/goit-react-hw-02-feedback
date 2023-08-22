import { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistic } from './statistics';
import { Section } from './section';
import { FeedbackOptions } from './feedbackOptions';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = ({ target: { name } }) => {
    this.setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return Math.floor((this.state.good / total) * 100);
  };

  render() {
    const { title, positiveText, negativeText, neutralText } = this.props;
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={title}>
          <FeedbackOptions
            optionsText={{ positiveText, negativeText, neutralText }}
            onLeaveFeedback={this.handleFeedbackClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            optionsText={{ positiveText, negativeText, neutralText }}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
  positiveText: PropTypes.string.isRequired,
  negativeText: PropTypes.string.isRequired,
  neutralText: PropTypes.string.isRequired,
};
