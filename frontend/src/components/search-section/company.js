import React from "react";
import "./company.css";

export default function(props) {
    return (
        <div className="company">
            <a href={props.url} className="company__link">{props.name}</a>
        </div>
    );
}