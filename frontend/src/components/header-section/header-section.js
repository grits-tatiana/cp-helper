import React from "react";
import Logo from "./logo";
import "./header-section.css";
import "../common/columns.css";

import {headerLogo} from "../variables";

export default function(props) {
    return (
        <header className="header">
            <div className="columns-wrapper">
                <div className="header__content">
                    <Logo url={headerLogo.url} src={headerLogo.src} alt={headerLogo.alt}/>
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
