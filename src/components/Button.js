import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
    return <div className="flatButton">{props.name}</div>
}

Button.propTypes = {
    name: PropTypes.string
};

export default Button;