import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <div className={styles.buttonsBar}>
                {
                    options.map(option => (
                        <button
                            key={option}
                            type="button"
                            name={option}
                            onClick={onLeaveFeedback}
                            className={styles.buttonStyle}> {option}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

