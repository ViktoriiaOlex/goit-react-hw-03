const Options = ({ handleFeedback, handleResetRating, summaryRating }) => {
    return (
    <div>
        <button
        type="button"
        onClick={() => {
            handleFeedback('good');
        }}
        >
        Good
        </button>
        <button type="button"
        onClick={() => { 
        handleFeedback('neutral');
        }}
        >
        Neutral
        </button>
        <button type="button"
        onClick={() => {
        handleFeedback('bad');
        }}
        >
        Bad
        </button>
        {summaryRating > 0 ? (
        <button type="button" onClick={handleResetRating}>
        Reset
        </button>
        ) : null}
    </div>
    );
};

export default Options;