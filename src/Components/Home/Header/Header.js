import React from 'react';
import Navmenu from '../../Shared/Nav/Navmenu';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <Navmenu></Navmenu>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;