import React from "react";
import apertureLogo from '../img/download.png'

const Header = () => {
    return (
        <header>
            <img src={apertureLogo} alt='Aperture Logo' />
            <h1>Aperture Science Todo List</h1>
        </header>
    )
}

export default Header