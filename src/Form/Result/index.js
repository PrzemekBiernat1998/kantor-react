import "./style.css"

export const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
            {result.startAmount.toFixed(2)} &nbsp;PLN&nbsp;=&nbsp;
            <strong>
                {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
            </>
        )}
    </p>
);
export default Result;