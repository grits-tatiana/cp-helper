import React from 'react';
import Header from './Header/Header';
import SearchSection from './search-section/search-connect';
import './main.css';

export default function() {
    return (
        <React.Fragment>
            <Header/>
            <SearchSection/>
        </React.Fragment>
    );
}
