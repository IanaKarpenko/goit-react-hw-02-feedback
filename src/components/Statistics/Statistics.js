import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import styles  from './Statistics.module.scss';

export const Statistics = ({ good, neutral, bad, total, positiveFeedbacksPercentage }) =>

    total ? (
        <>
            <ul className={styles.list}>
                <li className={styles.item}> Good:
                    <span> { good } </span>
                </li>
                <li className={styles.item}> Neutral:
                    <span> { neutral } </span>
                </li>
                <li className={styles.item}> Bad:
                    <span> { bad } </span>
                </li>
            </ul>
            <p>Total: <span> { total } </span></p>
            <p>Positive feedback: <span> { positiveFeedbacksPercentage + '%' } </span></p>
        </>
    ) 
    : (<Notification message={"No feedback given"} />);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbacksPercentage: PropTypes.number.isRequired,
}