import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg'

function Header(props) {
    return (
        <div className='header'>
            <Logo />
            <div className="score">{props.score}</div>
        </div>);
}

export default Header;
