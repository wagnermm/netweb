import { useState } from 'react';
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
    const [masc1, setMasc1] = useState("masculino1-hidden");
    const showMasc1=()=> {
        masc1 === 'masculino1-hidden' ? setMasc1('masculino1') : setMasc1('masculino1-hidden');
    };
    const [masc2, setMasc2] = useState("masculino2-hidden");
    const showMasc2=()=> {
        masc2 === 'masculino2-hidden' ? setMasc2('masculino2') : setMasc2('masculino2-hidden');
    };
    const [masc3, setMasc3] = useState("masculino3-hidden");
    const showMasc3=()=> {
        masc3 === 'masculino3-hidden' ? setMasc3('masculino3') : setMasc3('masculino3-hidden');
    };
    const [masc4, setMasc4] = useState("masculino4-hidden");
    const showMasc4=()=> {
        masc4 === 'masculino4-hidden' ? setMasc4('masculino4') : setMasc4('masculino4-hidden');
    };
    const [masc5, setMasc5] = useState("masculino5-hidden");
    const showMasc5=()=> {
        masc5 === 'masculino5-hidden' ? setMasc5('masculino5') : setMasc5('masculino5-hidden');
    };
    const [masc6, setMasc6] = useState("masculino6-hidden");
    const showMasc6=()=> {
        masc6 === 'masculino6-hidden' ? setMasc6('masculino6') : setMasc6('masculino6-hidden');
    };
    const [masc7, setMasc7] = useState("masculino7-hidden");
    const showMasc7=()=> {
        masc7 === 'masculino7-hidden' ? setMasc7('masculino7') : setMasc7('masculino7-hidden');
    };
    const [masc8, setMasc8] = useState("masculino8-hidden");
    const showMasc8=()=> {
        masc8 === 'masculino8-hidden' ? setMasc8('masculino8') : setMasc8('masculino8-hidden');
    };
    const [fem1, setFem1] = useState("feminino1-hidden");
    const showFem1=()=> {
        fem1 === 'feminino1-hidden' ? setFem1('feminino1') : setFem1('feminino1-hidden');
    };
    const [fem2, setFem2] = useState("feminino2-hidden");
    const showFem2=()=> {
        fem2 === 'feminino2-hidden' ? setFem2('feminino2') : setFem2('feminino2-hidden');
    };
    const [fem3, setFem3] = useState("feminino3-hidden");
    const showFem3=()=> {
        fem3 === 'feminino3-hidden' ? setFem3('feminino3') : setFem3('feminino3-hidden');
    };
    const [fem4, setFem4] = useState("feminino4-hidden");
    const showFem4=()=> {
        fem4 === 'feminino4-hidden' ? setFem4('feminino4') : setFem4('feminino4-hidden');
    };
    const [fem5, setFem5] = useState("feminino5-hidden");
    const showFem5=()=> {
        fem5 === 'feminino5-hidden' ? setFem5('feminino5') : setFem5('feminino5-hidden');
    };
    const [fem6, setFem6] = useState("feminino6-hidden");
    const showFem6=()=> {
        fem6 === 'feminino6-hidden' ? setFem6('feminino6') : setFem6('feminino6-hidden');
    };
    const [fem7, setFem7] = useState("feminino7-hidden");
    const showFem7=()=> {
        fem7 === 'feminino7-hidden' ? setFem7('feminino7') : setFem7('feminino7-hidden');
    };
    const [fem8, setFem8] = useState("feminino8-hidden");
    const showFem8=()=> {
        fem8 === 'feminino8-hidden' ? setFem8('feminino8') : setFem8('feminino8-hidden');
    };
    return(
        <div className="products-container" id='clothes'>
            <div className="products-title">
                <h1>Destaques</h1>
            </div>
            <div className="products-carousel-1">
                <div className="carouselItem-title">
                    <h2>Masculino</h2>
                </div>
                <Carousel>
                    <Carousel.Item className='item-carousel'>
                        <img src={CamisaLevis} alt="camisa" onClick={showMasc1}/>
                        <div className={masc1}>
                            <p>Camisa Levis</p>
                            <h2>R$ 199,90</h2>
                            <div className="select-masculino">
                                <a href="#">
                                    <button className='comprar-item'>Comprar</button>
                                </a>
                            </div>
                        </div>
                        <img src={BlusaCoach} alt="blusa" onClick={showMasc2}/>
                        <div className={masc2}>
                            <p>Moleton Coach</p>
                            <h2>R$ 209,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={CamisaGucci} alt="camisa" onClick={showMasc3}/>
                        <div className={masc3}>
                            <p>Camiseta Gucci</p>
                            <h2>R$ 99,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={CalcaLevis} alt="calça" onClick={showMasc4}/>
                        <div className={masc4}>
                            <p>Calça Levis</p>
                            <h2>R$ 199,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='item-carousel'>
                        <img src={AgasalhoAdidas} alt="agasalho" onClick={showMasc5}/>
                        <div className={masc5}>
                            <p>Agasalho Adidas</p>
                            <h2>R$ 299,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={JaquetaNike} alt="jaqueta" onClick={showMasc6}/>
                        <div className={masc6}>
                            <p>Jaqueta Nike</p>
                            <h2>R$ 399,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={JaquetaPuma} alt="jaqueta" onClick={showMasc7}/>
                        <div className={masc7}>
                            <p>Blusa Puma</p>
                            <h2>R$ 259,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={BlusaGucci} alt="blusa" onClick={showMasc8}/>
                        <div className={masc8}>
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
                        <img src={CamisaVersace} alt="camisa" onClick={showFem1}/>
                        <div className={fem1}>
                            <p>Camisa Versace</p>
                            <h2>R$ 189,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                    
                        <img src={BlusaPrada} alt="blusa" onClick={showFem2}/>
                        <div className={fem2}>
                            <p>Blusa Prada</p>
                            <h2>R$ 129,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={CamisetaGucci} alt="camiseta" onClick={showFem3}/>
                        <div className={fem3}>
                            <p>Camiseta Gucci</p>
                            <h2>R$ 99,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                        <img src={BlusaNike} alt="blusa" onClick={showFem4}/>
                        <div className={fem4}>
                            <p>Moleton Nike</p>
                            <h2>R$ 299,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='item-carousel'>
                        <img src={MoletonAdidas} alt="moleton" onClick={showFem5}/>
                        <div className={fem5}>
                            <p>Moleton Adidas</p>
                            <h2>R$ 299,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                  
                        <img src={CalcaLevisFem} alt="calca" onClick={showFem6}/>
                        <div className={fem6}>
                            <p>Calça Levis</p>
                            <h2>R$ 199,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                  
                        <img src={JaquetaPumaFem} alt="jaqueta" onClick={showFem7}/>
                        <div className={fem7}>
                            <p>Jaqueta Puma</p>
                            <h2>R$ 259,90</h2>
                            <a href="#">
                                <button className='comprar-item'>Comprar</button>
                            </a>
                        </div>                 
                        <img src={CamisetaLevis} alt="camiseta" onClick={showFem8}/>
                        <div className={fem8}>
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