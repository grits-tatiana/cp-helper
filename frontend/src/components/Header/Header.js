import React from 'react';
import HHLogo from '../HHLogo/HHLogo';
import LoginIcon from '../Icons/LoginIcon';
import './Header.css';
import ContentWrapper from '../ContentWrapper/ContentWrapper';


export default function() {
    return (
        <ContentWrapper background='#212122'>
            <header className="header">
                <HHLogo size={50}/>
                <div className="header__login-container">
                    <button className="header__login-item header--visible-xs"><LoginIcon /></button>
                    <button className="header__login-item header__login-item--button header--hidden-xs">
                        Войти
                    </button>
                </div>
            </header>
        </ContentWrapper>
    );
}
