import PropTypes from 'prop-types';
import styles from './Section.module.scss';

export const Section = ({ title, children }) => {
    return (
        <div className={styles.sectionMainStyle }>
            <h2 className={ styles.sectionTitle }> {title} </h2>
            { children }
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children:PropTypes.node.isRequired
}