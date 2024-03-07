import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [rating, setRating] = useState(
    localStorage.getItem('currentFeedback')
      ? JSON.parse(localStorage.getItem('currentFeedback'))
      : {
        good: 0,
        neutral: 0,
        bad: 0,
        }
  );

  const handleFeedback = feedbackType => {
    setRating(prevState => {
      return {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  const handleResetRating = () => {
    setRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = rating;
  const totalFeedback = good + neutral + bad;
  const averageRate = Math.round(((good + neutral) / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('currentFeedback', JSON.stringify(rating));
  }, [rating]);

  return (
    <div>
      <Description />
      <Options
        handleFeedback={handleFeedback}
        handleResetRating={handleResetRating}
        summaryRating={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          rating={rating}
          totalFeedback={totalFeedback}
          averageRate={averageRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
