/* eslint-disable max-len */
import React from 'react';


const LoginIcon = (props) => {
    const {size = 30} = props;
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 17.8057C12.5 17.8057 11 17.2952 11 14.7425C10.174 14.7425 10.174 12.7003 11 12.7003C11 12.3582 9.5 8.61597 12 9.12651C12.5 7.08434 18 7.08434 18.5 9.12651C18.847 10.5438 18 12.4491 18 12.7003C18.826 12.7003 18.826 14.7425 18 14.7425C18 17.2952 16.5 17.8057 16.5 17.8057V20.3585C18.977 21.307 21.43 22.0912 22.686 22.9877C24.734 20.868 26 17.9558 26 14.7425C26 8.25655 20.852 3 14.5 3C8.148 3 3 8.25655 3 14.7425C3 17.962 4.27 20.8782 6.325 23C7.655 22.0606 10.277 21.2172 12.5 20.3585V17.8057Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M6.5 23.1405C8.539 24.9861 11.3672 26.13 14.4946 26.13C17.6269 26.13 20.46 24.9817 22.5 23.13" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    );
};

export default LoginIcon;