import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Featured.css';
import Produto1 from './img/product-01.jpg';
import Produto2 from './img/product-02.jpg';
import Produto3 from './img/product-03.jpg';
import Produto4 from './img/product-04.jpg';
import { RiTShirtLine } from 'react-icons/Ri';
import { GiArmoredPants, GiShorts, GiDress, GiSkirt, GiBeachBag } from 'react-icons/Gi';



const Featured=()=> {
    const [item1, setItem1] = useState("featured-item1-hidden");
    const showItem1=()=> {
        item1 === 'featured-item1-hidden' ? setItem1('featured-item1') : setItem1('featured-item1-hidden');
    };
    const hideItem1=()=> {
        item1 === 'featured-item1' ? setItem1('featured-item1-hidden') : setItem1('featured-item1-hidden');
    };
    const [item2, setItem2] = useState("featured-item2-hidden");
    const showItem2=()=> {
        item2 === 'featured-item2-hidden' ? setItem2('featured-item2') : setItem2('featured-item2-hidden');
    };
    const hideItem2=()=> {
        item2 === 'featured-item2' ? setItem2('featured-item2-hidden') : setItem2('featured-item2-hidden');
    };
    const [item3, setItem3] = useState("featured-item3-hidden");
    const showItem3=()=> {
        item3 === 'featured-item3-hidden' ? setItem3('featured-item3') : setItem3('featured-item3-hidden');
    };
    const hideItem3=()=> {
        item3 === 'featured-item3' ? setItem3('featured-item3-hidden') : setItem3('featured-item3-hidden');
    };
    const [item4, setItem4] = useState("featured-item4-hidden");
    const showItem4=()=> {
        item4 === 'featured-item4-hidden' ? setItem4('featured-item4') : setItem4('featured-item4-hidden');
    }
    const hideItem4=()=> {
        item4 === 'featured-item4' ? setItem4('featured-item4-hidden') : setItem4('featured-item4-hidden');
    };
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
                                <a href="#"><p>2 por R$129</p></a>
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
                    <h3>Últimas unidades</h3>
                </div>
                <div className='featured-item'>
                    <a>
                        <img onClick={showItem1} src={Produto1} alt="item-1" />
                        <div className={item1}>
                            <div className="items-image">
                                <img onClick={hideItem1} src={Produto1} alt="calça" />
                            </div>
                            <div className="price-item">
                                <h5>Calça Masculina</h5>
                                <h6>Apenas</h6>
                                <h3>R$ 99,00</h3>
                            </div>
                            <div className="item-description">
                                <button><a href="#">Comprar</a></button>
                                <div className="select-item">
                                    <p>Selecione um tamanho</p>
                                    <select id='select'>
                                        <option value=""></option>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="G">GG</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a>
                        <img onClick={showItem2} src={Produto2} alt="item-2" />
                        <div className={item2}>
                            <div className="items-image">
                                <img onClick={hideItem2} src={Produto2} alt="jaqueta" />
                            </div>
                            <div className="price-item">
                                <h5>Colete</h5>
                                <h6>Apenas</h6>
                                <h3>R$ 129,00</h3>
                            </div>
                            <div className="item-description">
                                <button><a href="#">Comprar</a></button>
                                <div className="select-item">
                                    <p>Selecione um tamanho</p>
                                    <select id='select'>
                                        <option value=""></option>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="G">GG</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a>
                        <img onClick={showItem3} src={Produto3} alt="item-3" />
                        <div className={item3}>
                            <div className="items-image">
                                <img onClick={hideItem3} src={Produto3} alt="blusa" />
                            </div>
                            <div className="price-item">
                                <h5>Blusa Feminina</h5>
                                <h6>Apenas</h6>
                                <h3>R$ 89,00</h3>
                            </div>
                            <div className="item-description">
                                <button><a href="#">Comprar</a></button>
                                <div className="select-item">
                                    <p>Selecione um tamanho</p>
                                    <select id='select'>
                                        <option value=""></option>
                                        <option value="P">P</option>
                                        <option value="M">M</option>
                                        <option value="G">G</option>
                                        <option value="G">GG</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a>
                        <img onClick={showItem4} src={Produto4} alt="item-4" />
                        <div className={item4}>
                            <div className="items-image">
                                <img onClick={hideItem4} src={Produto4} alt="bolsa" />
                            </div>
                            <div className="price-item">
                                <h5>Bolsa</h5>
                                <h6>Apenas</h6>
                                <h3>R$ 109,00</h3>
                            </div>
                            <div className="item-description">
                                <button><a href="#">Comprar</a></button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Featured