
import './Navbar.css';


const Navbar=()=> {
    return(
        <div className="sidebar">
            <nav className="nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#clothes">Confecções</a></li>
                    <li><a href="#bags">Acessórios</a></li>
                    <li><a href="#information">Informações</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar