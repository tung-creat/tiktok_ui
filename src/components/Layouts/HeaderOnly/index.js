import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
        </div>
    );
};

export default HeaderOnly;
