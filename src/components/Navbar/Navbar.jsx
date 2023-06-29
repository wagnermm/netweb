
import './Navbar.css';


const Navbar=()=> {
    return(
        <div className="sidebar">
            <nav className="nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#clothes">Confecção</a></li>
                    <li><a href="#bags">Acessórios</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar