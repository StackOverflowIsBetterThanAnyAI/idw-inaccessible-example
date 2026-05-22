import React, { Fragment } from "react";

const Review = ({
    questions,
    reviewHeading,
    imgSrc,
    imgAlt,
    onChange,
    onSubmit,
    hasSubmitted,
    headerRef,
}) => (
    <section>
        <div className="header">
            <span className="h1" ref={headerRef} tabIndex="-1">
                {reviewHeading}
            </span>
            <img src={imgSrc} alt={imgAlt} />
        </div>
        {hasSubmitted ? (
            <Fragment>
                <h2>Thank you for your review!</h2>
                <p>We hope to see you at the next workshop.</p>
            </Fragment>
        ) : (
            <Fragment>
                <h2>Rate each item below:</h2>
                <p>
                    <strong>Tip:</strong> swipe/drag left/right to
                    disagree/agree.
                </p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    <ul role="img">
                        {questions.map((question) => (
                            <li key={question.qid}>
                                <div>{question.qtext}</div>
                                <label>yes</label>
                                <input
                                    id={`${question.qid}-yes`}
                                    onChange={onChange}
                                    name={question.qid}
                                    type="radio"
                                    value="yes"
                                />
                                <label>no</label>
                                <input
                                    id={`${question.qid}-no`}
                                    onChange={onChange}
                                    name={question.qid}
                                    type="radio"
                                    value="no"
                                />
                            </li>
                        ))}
                    </ul>
                    <label>Any other comments?</label>
                    <textarea
                        id="question-4"
                        name="question-4"
                        onChange={onChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </Fragment>
        )}
    </section>
);

export default Review;
