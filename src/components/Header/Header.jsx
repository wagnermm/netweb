import { useState } from 'react';
import SearchBar from "../Search/SearchBar";
import ShoppingCart from "../Cart/ShoppingCart";
import Logo from "../Logo/Logo";
import './Header.css';



function Header() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = ()=> { 
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
      };
      const [close, setClose] = useState("menu__close");
      const closeMenu=()=> {
        close === "menu__close" ? setClose('menu__close nav__active') : setClose("menu__close");
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
      }
    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <nav className={active}>
                    <ul>
                        <div onClick={closeMenu} className="close__menu">X</div>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#clothes">Promoções</a></li>
                        <li><a href="#bags">Acessórios</a></li>
                        <li><a href="#information">Informações</a></li>
                    </ul>
                </nav>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                <SearchBar/>
                <ShoppingCart/>
            </div>
        </header>
    )
}

export default Header