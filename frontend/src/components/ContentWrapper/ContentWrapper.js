import React from 'react';
import './ContentWrapper.css';


const ContentWrapper = ({children, background}) => {
    return (
        <div className="hh-content-wrapper" style={background ? {backgroundColor: background} : undefined}>
            <div className="hh-content-wrapper__main">
                {children}
            </div>
        </div>
    );
};

export default ContentWrapper;
