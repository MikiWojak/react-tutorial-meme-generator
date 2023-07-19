import React from 'react';

import trollFaceImg from '../../assets/images/troll-face.png'

const Header = () => {
    return (
        <header className="header">
            <img src={trollFaceImg} alt="Troll face" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header
