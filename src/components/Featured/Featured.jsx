import React from 'react';
import { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';
import './Featured.css';
import Calca from './img/product-01.jpg';
import Colete from './img/product-02.jpg';
import Blusa from './img/product-03.jpg';
import Bolsa from './img/product-04.jpg';
import {GiShoppingCart} from 'react-icons/Gi';



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
const { featuredItem, setFeaturedItem } = useState("");
    useEffect(() => {
        fetchProducts('').then((response) => {
        setFeaturedItem(response);
        });
    }, []);
    console.log(featuredItem);
    return(
        <div>
            <div className="featured">
                <div className="featured-title">
                    <h3>Queima de Estoque</h3>
                </div>
                <div className='featured-container'>
                    <div className="featured-item">
                        <img src={Calca} alt="item-1" />
                        <div className="item-btn">
                            <button onClick={showItem1}>Aproveite</button>
                        </div>
                    </div>
                    <div className={item1}>
                        <div className="close-item">
                            <div onClick={hideItem1} className="close-btn">X</div>
                        </div>
                        <div className="items-image">
                            <img src={Calca} alt="calça" />
                        </div>
                        <div className="price-item">
                            <h5>Calça Masculina</h5>
                            <h6>Apenas</h6>
                            <h3>R$ 99,00</h3>
                        </div>
                        <div className="select-item">
                            <p>Selecione um tamanho</p>
                            <select id='select'>
                                <option value=""></option>
                                <option value="P">P</option>
                                <option value="M">M</option>
                                <option value="G">G</option>
                                <option value="G">GG</option>
                            </select>
                            <div className="selectCart">
                                <div className="selectCartBtn"><GiShoppingCart/></div>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item">
                        <img src={Colete} alt="item-2" />
                        <div className="item-btn">
                            <button onClick={showItem2}>Aproveite</button>
                        </div>
                    </div>
                    <div className={item2}>
                    <div className="close-item">
                        <div onClick={hideItem2} className="close-btn">X</div>
                    </div>
                        <div className="items-image">
                            <img src={Colete} alt="jaqueta" />
                        </div>
                        <div className="price-item">
                            <h5>Colete</h5>
                            <h6>Apenas</h6>
                            <h3>R$ 129,00</h3>
                        </div>
                        <div className="select-item">
                            <p>Selecione um tamanho</p>
                            <select id='select'>
                                <option value=""></option>
                                <option value="P">P</option>
                                <option value="M">M</option>
                                <option value="G">G</option>
                                <option value="G">GG</option>
                            </select>
                            <div className="selectCart">
                                <div className="selectCartBtn">
                                    <div className="selectCartBtn"><GiShoppingCart/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item">
                        <img src={Blusa} alt="item-3" />
                        <div className="item-btn">
                            <button onClick={showItem3}>Aproveite</button>
                        </div>
                    </div>
                    <div className={item3}>
                        <div className="close-item">
                            <div onClick={hideItem3} className="close-btn">X</div>
                        </div>
                        <div className="items-image">
                            <img src={Blusa} alt="blusa" />
                        </div>
                        <div className="price-item">
                            <h5>Blusa Feminina</h5>
                            <h6>Apenas</h6>
                            <h3>R$ 89,00</h3>
                        </div>
                        <div className="select-item">
                            <p>Selecione um tamanho</p>
                            <select id='select'>
                                <option value=""></option>
                                <option value="P">P</option>
                                <option value="M">M</option>
                                <option value="G">G</option>
                                <option value="G">GG</option>
                            </select>
                            <div className="selectCart">
                                <div className="selectCartBtn"><GiShoppingCart/></div>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item">
                        <img src={Bolsa} alt="item-4" />
                        <div className="item-btn">
                            <button onClick={showItem4}>Aproveite</button>
                        </div>
                    </div>
                    <div className={item4}>
                    <div className="close-item">
                        <div onClick={hideItem4} className="close-btn">X</div>
                    </div>
                        <div className="items-image">
                            <img src={Bolsa} alt="bolsa" />
                        </div>
                        <div className="price-item">
                            <h5>Bolsa</h5>
                            <h6>Apenas</h6>
                            <h3>R$ 109,00</h3>
                        </div>
                        <div className="select-item">
                            <div className="selectCart">
                                <div className="selectCartBtn"><GiShoppingCart/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured