import React from "react";

import HeaderSection from "./header-section/header-section";
import SearchSection from "./search-section/search-connect";

export default function(props) {
    return (
        <React.Fragment>
            <HeaderSection/>
            <SearchSection/>
        </React.Fragment>
    );
}