import React, { Component } from 'react';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/Feedbackoptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const objKey = Object.keys(this.state);
    return (
      <div>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={objKey}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            </Section>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
