import { useState } from 'react';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/Feedbackoptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const options = { good, neutral, bad };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();

    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const objKey = Object.keys(options);
  return (
    <div>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
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

export default App;
