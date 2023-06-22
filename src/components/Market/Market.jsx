import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Market.css';
import Banner from '../Images/banner.png';
import Banner1 from '../Images/banner1.png';
import Casal from '../Images/casal.png';
import Roupa1 from '../Images/roupa1.png';
import Roupa2 from '../Images/roupa2.png';
import Roupa3 from '../Images/roupa3.png';
import Roupa4 from '../Images/roupa4.png';
import Roupa5 from '../Images/roupa5.png'
import Roupa6 from '../Images/roupa6.png'
import Nike from '../Images/nike.jpg';
import Adidas from '../Images/adidas.jpg';
import Coach from '../Images/coach.jpg';
import Puma from '../Images/puma.jpg';
import Gucci from '../Images/gucci.jpg';
import Prada from '../Images/prada.jpg';
import Versace from '../Images/versace.jpg';
import Levis from '../Images/levis.jpg';

const Market=()=> {
    return(
        <div className="market-place">
                <div className="market-banner">
                    <img src={Banner} alt="banner1" />
                    <div className="market-ads">
                        <h4>Roupas Feminina</h4>
                        <h2>Com até 50% de desconto</h2>
                        <Carousel>
                            <Carousel.Item>
                                <img src={Roupa1} alt="roupa1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Roupa2} alt="roupa2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Roupa3} alt="roupa3" />
                            </Carousel.Item>
                        </Carousel>
                        <button className='btn-ads'><a href="#">Aproveite</a></button>
                    </div>
                </div>
                <div className="winter">
                    <div className="winter-banner">
                        <img src={Banner1} alt="inverno" />
                        <div className="winter-container">
                            <h3>Moda Inverno</h3>
                            <Carousel className='winter-carousel'>
                                <Carousel.Item className='winter-images'>
                                    <img src={Casal} alt="casal" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Roupa4} alt="roupa" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Roupa5} alt="roupa" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Roupa6} alt="roupa" />
                                </Carousel.Item>
                            </Carousel>
                            <button className='btn-winter'><a href="#">Confira</a></button>
                        </div>
                    </div>
                </div>
                <div className="market-container">
                    <h2>Navegue pelas marcas</h2>
                    <Carousel className='market-carousel'>
                        <Carousel.Item className='market-logo'>
                            <a href="#"><img src={Nike} alt="nike" /></a>
                            <a href="#"><img src={Adidas} alt="adidas" /></a>
                            <a href="#"><img src={Coach} alt="coach" /></a>
                            <a href="#"><img src={Puma} alt="puma" /></a>
                        </Carousel.Item>
                        <Carousel.Item className='market-logo'>
                            <a href="#"><img src={Gucci} alt="gucci" /></a>
                            <a href="#"><img src={Prada} alt="prada" /></a>
                            <a href="#"><img src={Versace} alt="versace" /></a>
                            <a href="#"><img src={Levis} alt="levis" /></a>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
    )
}

export default Market