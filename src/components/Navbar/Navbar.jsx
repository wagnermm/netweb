
import './Navbar.css';


const Navbar=()=> {
    return(
        <div className="sidebar">
            <nav className="nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar