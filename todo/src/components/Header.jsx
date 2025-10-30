import './Header.css'
import todo_logo from '../assets/todo_logo.png'

function Header(){
    
    return (
        <div className="header">
            <div ><img id="logo" src={todo_logo} alt="todo_logo" /></div>
            <div id="nav">
                <a href="/">Home</a>
                <a href="/">Contact</a>
                <a href="/">Feedback</a>
                <a href="/">Login</a>
            </div>
            <a href="/" id="hamberger">☰</a>
        </div>
    );
}

export default Header