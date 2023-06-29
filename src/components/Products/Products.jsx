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
                        <img src={CamisaLevis} alt="camisa"/>
                        <div className="masculino1">
                            <p>Camisa Levis</p>
                            <h2>R$ 199,90</h2>
                            <div className="select-masculino">
                                <a href="#">
                                    <button className='comprar-item'>Comprar</button>
                                </a>
                            </div>
                        </div>
                        <img src={BlusaCoach} alt="blusa"/>
                        <div className="masculino2">
                            <p>Moleton Coach</p>
                            <h2>R$ 209,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={CamisaGucci} alt="camisa"/>
                            <div className="masculino3">
                                <p>Camiseta Gucci</p>
                                <h2>R$ 99,90</h2>
                                <a href="#">
                                    <button className='comprar-item'>Comprar</button>
                                </a>
                            </div>
                        <img src={CalcaLevis} alt="calça"/>
                        <div className="masculino4">
                            <p>Calça Levis</p>
                            <h2>R$ 199,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='item-carousel'>
                        <img src={AgasalhoAdidas} alt="agasalho"/>
                        <div className="masculino5">
                            <p>Agasalho Adidas</p>
                            <h2>R$ 299,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={JaquetaNike} alt="jaqueta"/>
                        <div className="masculino6">
                            <p>Jaqueta Nike</p>
                            <h2>R$ 399,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={JaquetaPuma} alt="jaqueta"/>
                        <div className="masculino7">
                            <p>Blusa Puma</p>
                            <h2>R$ 259,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={BlusaGucci} alt="blusa"/>
                        <div className="masculino8">
                            <p>Moleton Gucci</p>
                            <h2>R$ 179,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="products-carousel-2">
                <div className="carouselItem-title">
                    <h2>Feminino</h2>
                </div>
                <Carousel>
                    <Carousel.Item className='item-carousel'>
                        <img src={CamisaVersace} alt="camisa"/>
                        <div className="feminino1">
                            <p>Camisa Versace</p>
                            <h2>R$ 189,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                    
                        <img src={BlusaPrada} alt="blusa"/>
                        <div className="feminino2">
                            <p>Blusa Prada</p>
                            <h2>R$ 129,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={CamisetaGucci} alt="camiseta"/>
                        <div className="feminino3">
                            <p>Camiseta Gucci</p>
                            <h2>R$ 99,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={BlusaNike} alt="blusa"/>
                        <div className="feminino4">
                            <p>Moleton Nike</p>
                            <h2>R$ 299,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='item-carousel'>
                        <img src={MoletonAdidas} alt="moleton"/>
                        <div className="feminino5">
                            <p>Moleton Adidas</p>
                            <h2>R$ 299,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                  
                        <img src={CalcaLevisFem} alt="calca"/>
                        <div className="feminino6">
                            <p>Calça Levis</p>
                            <h2>R$ 199,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                  
                        <img src={JaquetaPumaFem} alt="jaqueta"/>
                        <div className="feminino7">
                            <p>Jaqueta Puma</p>
                            <h2>R$ 259,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                 
                        <img src={CamisetaLevis} alt="camiseta"/>
                        <div className="feminino8">
                            <p>Camiseta Levis</p>
                            <h2>R$ 99,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Products