import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Products.css';
import CamisaSocial from './img/camisa1.jpg';
import BlusaCoach from './img/blusacoach.jpg';
import BlusaGucci from './img/blusagucci.jpg';
import CalcaLevis from './img/calcalevis.jpg';
import AgasalhoAdidas from './img/agasalhoadidas.jpg';
import JaquetaNike from './img/jaquetanike.jpg';
import JaquetaPuma from './img/jaquetapuma.jpg';
import CamisaGucci from './img/camisagucci.jpg';

const Products=()=> {
    return(
        <div className="products-container">
            <div className="products-title">
                <h1>Destaques</h1>
            </div>
            <div className="products-carousel-1">
                <div className="carouselItem-title">
                    <h2>Masculino</h2>
                </div>
                <Carousel>
                    <Carousel.Item className='item-carousel'>
                        <a href="#">
                            <img src={CamisaSocial} alt="camisa"/>
                            <div className="item-describe">
                                <p>Camisa Social R$ 150,00</p>
                            </div>
                        </a>
                        <a href="#">
                            <img src={BlusaCoach} alt="blusa"/>
                        </a>
                        <a href="#">
                            <img src={BlusaGucci} alt="blusa"/>
                        </a>
                        <a href="#">
                            <img src={CalcaLevis} alt="calça"/>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item className='item-carousel'>
                        <a href="#">
                            <img src={AgasalhoAdidas} alt="agasalho"/>
                        </a>
                        <a href="#">
                            <img src={JaquetaNike} alt="jaqueta"/>
                        </a>
                        <a href="#">
                            <img src={JaquetaPuma} alt="jaqueta"/>
                        </a>
                        <a href="#">
                            <img src={CamisaGucci} alt="camisa"/>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="products-carousel-2">
                <div className="carouselItem-title">
                    <h2>Feminino</h2>
                </div>
                <Carousel>
                    <Carousel.Item className='item-carousel'>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </Carousel.Item>
                    <Carousel.Item className='item-carousel'>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Products