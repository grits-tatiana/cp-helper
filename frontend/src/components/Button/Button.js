import React, {forwardRef} from 'react';
import './Button.css';


const Button = forwardRef((props, ref) => {
    const {
        children, buttonType = 'button', disabled = false, ...rest
    } = props;


    return (
        <button
            ref={ref}
            className="hh-button"
            type={buttonType}
            disabled={disabled}
            {...rest}>
            {children}
        </button>
    );
});

export default Button;
