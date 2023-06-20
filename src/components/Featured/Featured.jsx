import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Featured.css';
import Produto1 from '../Images/product-01.jpg';
import Produto2 from '../Images/product-02.jpg';
import Produto3 from '../Images/product-03.jpg';
import Produto4 from '../Images/product-04.jpg';
import Banner from '../Images/banner.png';
import Banner1 from '../Images/banner1.png';
import Roupa1 from '../Images/roupa1.png';
import Roupa2 from '../Images/roupa2.png';
import Roupa3 from '../Images/roupa3.png';
import Roupa4 from '../Images/roupa4.png';
import { RiTShirtLine } from 'react-icons/Ri';
import { GiArmoredPants, GiShorts, GiDress, GiSkirt, GiBeachBag } from 'react-icons/Gi';


const Featured=()=> {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="ads-container">
                        <div className="ads-title">
                            <h4>Promoções</h4>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <RiTShirtLine/>
                                <RiTShirtLine/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>2 por R$99</p></a>
                            </div>
                        </div>
                        <div className="ads-cards">
                        <div className="ads-icon">
                                <GiArmoredPants/>
                                <GiArmoredPants/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>2 por R$199</p></a>
                            </div>
                        </div>
                        <div className="ads-cards">
                        <div className="ads-icon">
                                <RiTShirtLine/>
                                <GiArmoredPants/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>Escolha o seu</p></a>
                            </div>
                        </div>
                        <div className="ads-cards">
                        <div className="ads-icon">
                                <GiShorts/>
                                <GiShorts/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>2 por R$99</p></a>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="ads-container">
                        <div className="ads-title">
                            <h4>Promoções</h4>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiSkirt/>
                                <GiSkirt/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>2 por R$99</p></a>
                            </div>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiDress/>
                                <GiDress/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>2 por R$199</p></a>
                            </div>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiBeachBag/>
                                <GiBeachBag/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>2 por R$99</p></a>
                            </div>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiDress/>
                                <GiBeachBag/>
                            </div>
                            <div className="ads-text">
                                <a href="#"><p>Escolha o seu</p></a>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="featured">
                <div className="featured-title">
                    <h3>Últimos lançamentos</h3>
                </div>
                <Carousel>
                    <Carousel.Item className='featured-item'>
                        <a href="#">
                            <img src={Produto1} alt="item-1" />
                        </a>
                        <a href="#">
                            <img src={Produto2} alt="item-2" />
                        </a>
                        <a href="#">
                            <img src={Produto3} alt="item-3" />
                        </a>
                        <a href="#">
                            <img src={Produto4} alt="item-4" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item className='featured-item'>
                        <a href="#">
                            <img src={Produto1} alt="item-1" />
                        </a>
                        <a href="#">
                            <img src={Produto2} alt="item-2" />
                        </a>
                        <a href="#">
                            <img src={Produto3} alt="item-3" />
                        </a>
                        <a href="#">
                            <img src={Produto4} alt="item-4" />
                        </a>
                    </Carousel.Item>                         
                </Carousel>
            </div>
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
                            <img src={Roupa4} alt="roupa" />
                            <button className='btn-winter'><a href="#">Confira</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured