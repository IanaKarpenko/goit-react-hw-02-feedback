import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return (
        <p> { message } </p>
    )
}

Notification.defaultProps = {
    message: "No feedback given",
}

Notification.propTypes = {
    message: PropTypes.string,
}