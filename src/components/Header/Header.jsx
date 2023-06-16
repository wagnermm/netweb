import SearchBar from "../Search/SearchBar";
import ShoppingCart from "../Cart/ShoppingCart";
import Logo from "../Logo/Logo";
import './Header.css';



function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <SearchBar/>
                <ShoppingCart/>
            </div>
        </header>
    )
}

export default Header