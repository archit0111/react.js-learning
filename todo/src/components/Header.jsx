import { useState } from "react";
import './Header.css'

function Header(){
    
    return (
        <div className="header">
            <div id="logo"><img src="" alt="todo_logo" /></div>
            <div id="nav">
                <a href="/">Home</a>
                <a href="/">Contact</a>
                <a href="/">Feedback</a>
                <a href="/">Login</a>
            </div>
        </div>
    );
}

export default Header