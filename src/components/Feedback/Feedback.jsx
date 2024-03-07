const Feedback = ({ rating, totalFeedback, averageRate }) => {
    return (
    <>
        <p>Good: {rating.good}</p>
        <p>Neutral: {rating.neutral}</p>
        <p>Bad: {rating.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {averageRate}%</p>
    </>
    );
};

export default Feedback;