import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Products.css';
import Produto1 from '../Images/product-01.jpg';
import Produto2 from '../Images/product-02.jpg';
import { RiTShirtLine } from 'react-icons/Ri';
import { GiArmoredPants, GiShorts, GiDress, GiSkirt, GiBeachBag } from 'react-icons/Gi';

const Products=()=> {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="ads-container">
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <RiTShirtLine/>
                                <RiTShirtLine/>
                            </div>
                            <div className="ads-text">
                                <p>2 for $99</p>
                            </div>
                        </div>
                        <div className="ads-cards">
                        <div className="ads-icon">
                                <GiArmoredPants/>
                                <GiArmoredPants/>
                            </div>
                            <div className="ads-text">
                                <p>2 for $199</p>
                            </div>
                        </div>
                        <div className="ads-cards">
                        <div className="ads-icon">
                                <RiTShirtLine/>
                                <GiArmoredPants/>
                            </div>
                            <div className="ads-text">
                                <p>Choose yours</p>
                            </div>
                        </div>
                        <div className="ads-cards">
                        <div className="ads-icon">
                                <GiShorts/>
                                <GiShorts/>
                            </div>
                            <div className="ads-text">
                                <p>2 for $99</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="ads-container">
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiSkirt/>
                                <GiSkirt/>
                            </div>
                            <div className="ads-text">
                                <p>2 for $99</p>
                            </div>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiDress/>
                                <GiDress/>
                            </div>
                            <div className="ads-text">
                                <p>2 for $199</p>
                            </div>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiBeachBag/>
                                <GiBeachBag/>
                            </div>
                            <div className="ads-text">
                                <p>2 for $99</p>
                            </div>
                        </div>
                        <div className="ads-cards">
                            <div className="ads-icon">
                                <GiDress/>
                                <GiBeachBag/>
                            </div>
                            <div className="ads-text">
                                <p>Choose yours</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <h3>Últimos lançamentos</h3>
            <Carousel>
                <Carousel.Item>
                    <img src={Produto1} alt="item-1" />
                    <img src={Produto1} alt="item-1" />
                    <img src={Produto1} alt="item-1" />
                    <img src={Produto1} alt="item-1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Produto2} alt="item-2" />
                    <img src={Produto1} alt="item-1" />
                    <img src={Produto1} alt="item-1" />
                    <img src={Produto1} alt="item-1" />
                </Carousel.Item>                          
            </Carousel>
        </div>
    )
}

export default Products