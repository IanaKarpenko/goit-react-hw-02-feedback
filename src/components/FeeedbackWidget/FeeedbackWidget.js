import { Component } from "react";
import { Statistics } from "../Statistics";
import { FeedbackOptions } from "../FeedbackOptions";
import { Section } from "../Section/Section";

export class FeeedbackWidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClick = (evt) => {

        const { name } = evt.target;
        this.setState((state) => {
            return { [name]: state[name] + 1 }
        });
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, cur) => acc + cur);
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return good ? Math.round(good * 100 / this.countTotalFeedback()) : 0;
    }

    render() {
        console.log(this.countTotalFeedback());
        console.log(this.countPositiveFeedbackPercentage());
        const { good, neutral, bad } = this.state;
        return (
        <>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.handleClick} />
                </Section>
                
                
            <Section title={"Statistics"}>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positiveFeedbacksPercentage={this.countPositiveFeedbackPercentage()} />
                </Section>
                
        </>
        )
    }
}