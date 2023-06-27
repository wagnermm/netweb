import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Products.css';
import CamisaLevis from './img/camisalevis.jpg';
import BlusaCoach from './img/blusacoach.jpg';
import BlusaGucci from './img/blusagucci.jpg';
import CalcaLevis from './img/calcalevis.jpg';
import AgasalhoAdidas from './img/agasalhoadidas.jpg';
import JaquetaNike from './img/jaquetanike.jpg';
import JaquetaPuma from './img/jaquetapuma.jpg';
import CamisaGucci from './img/camisagucci.jpg';
import CamisaVersace from './img/camisaversace.jpg';
import BlusaPrada from './img/blusaprada.jpg';
import CamisetaGucci from './img/camisetagucci.jpg';
import BlusaNike from './img/blusanike.jpg';
import MoletonAdidas from './img/moletonadidas.jpg';
import CalcaLevisFem from './img/calcalevisfem.jpg';
import CamisetaLevis from './img/camisetalevis.jpg';
import JaquetaPumaFem from './img/jaquetapumafem.jpg';

const Products=()=> {
    return(
        <div className="products-container" id='products'>
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
                            <img src={CamisaLevis} alt="camisa"/>
                        </a>
                        <a href="#">
                            <img src={BlusaCoach} alt="blusa"/>
                        </a>
                        <a href="#">
                            <img src={CamisaGucci} alt="camisa"/>
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
                            <img src={BlusaGucci} alt="blusa"/>
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
                        <a href="#">
                            <img src={CamisaVersace} alt="camisa"/>
                        </a>
                        <a href="#">
                            <img src={BlusaPrada} alt="blusa"/>
                        </a>
                        <a href="#">
                            <img src={CamisetaGucci} alt="camiseta"/>
                        </a>
                        <a href="#">
                            <img src={BlusaNike} alt="blusa"/>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item className='item-carousel'>
                        <a href="#">
                            <img src={MoletonAdidas} alt="moleton"/>
                        </a>
                        <a href="#">
                            <img src={CalcaLevisFem} alt="calca"/>
                        </a>
                        <a href="#">
                            <img src={JaquetaPumaFem} alt="jaqueta"/>
                        </a>
                        <a href="#">
                            <img src={CamisetaLevis} alt="camiseta"/>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Products