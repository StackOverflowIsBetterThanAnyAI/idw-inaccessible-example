import React, { Component, createRef } from "react";
import { getQuestions } from "./api";
import AriaMiddleFinger from "./AriaMiddleFinger";
import Review from "./Review";
import workshopImg from "./workshopcap.png";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            answers: {},
            hasSubmitted: false,
        };

        this.focusHeader = createRef();
    }

    onChangeHandler = (e) => {
        this.setState({
            answers: Object.assign({}, this.state.answers, {
                [e.target.name]: e.target.value,
            }),
        });
    };

    onSubmitHandler = () => {
        console.log(this.state.answers);
        this.setState({
            hasSubmitted: true,
        });
        this.focusHeader.current.focus();
    };

    componentDidMount() {
        getQuestions().then((questions) => {
            this.setState({ questions });
        });
    }
    render() {
        const { questions, hasSubmitted } = this.state;
        return (
            <div className="App">
                <AriaMiddleFinger />
                <Review
                    questions={questions}
                    reviewHeading={`You ${hasSubmitted ? "reviewed" : "attended"} Heydon's workshop`}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    hasSubmitted={hasSubmitted}
                    imgSrc={workshopImg}
                    headerRef={this.focusHeader}
                    imgAlt="Heydon Pickering wearing paper glasses talking to workshop attendees at a table with paper prototyping tools."
                />
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "20px",
                        fontSize: "8px",
                        color: "#888",
                    }}
                >
                    Copyright by Heydon Pickering
                </div>
                <div
                    arial-label="first of June 2026"
                    style={{
                        textAlign: "center",
                        fontSize: "8px",
                        color: "#888",
                    }}
                >
                    2026-06-01
                </div>
            </div>
        );
    }
}

export default App;
