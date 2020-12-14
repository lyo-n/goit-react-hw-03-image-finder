import React from 'react';
import propTypes from 'prop-types';
import styles from '../button/button.module.css';

const Button = ({onClick}) => {
    return(
        <div>
      <button type="button" onClick={onClick} className={styles.Button}>
        Load More
      </button>
    </div>
    );
};

Button.propTypes = {
    onClick: propTypes.func.isRequired,
};

export default Button;