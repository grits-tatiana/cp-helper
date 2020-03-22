import React from 'react';
import HHLogo from '../HHLogo/HHLogo';
import './header-section.css';
import '../common/columns.css';


export default function() {
    return (
        <header className="header">
            <div className="columns-wrapper">
                <div className="header__content">
                    <HHLogo size={50}/>
                    <div className="header__fill"></div>
                    <div className="header__button">
                        <button className="header-button-icon header-button-icon_login">Войти</button>
                        <button className="header-button header-button_login">Войти</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
