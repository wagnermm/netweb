import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Featured.css';
import Produto1 from '../Images/product-01.jpg';
import Produto2 from '../Images/product-02.jpg';
import Produto3 from '../Images/product-03.jpg';
import Produto4 from '../Images/product-04.jpg';
import { RiTShirtLine } from 'react-icons/Ri';
import { GiArmoredPants, GiShorts, GiDress, GiSkirt, GiBeachBag } from 'react-icons/Gi';

const Featured=()=> {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="ads-container">
                        <div className="ads-title">
                            <h4>Promotions</h4>
                        </div>
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
                        <div className="ads-title">
                            <h4>Promotions</h4>
                        </div>
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
            <div className="featured">
                <div className="featured-title">
                    <h3>Latest Releases</h3>
                </div>
                <Carousel>
                    <Carousel.Item className='featured-item'>
                        <a href="">
                            <img src={Produto1} alt="item-1" />
                        </a>
                        <a href="">
                            <img src={Produto2} alt="item-2" />
                        </a>
                        <a href="">
                            <img src={Produto3} alt="item-3" />
                        </a>
                        <a href="">
                            <img src={Produto4} alt="item-4" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item className='featured-item'>
                        <a href="">
                            <img src={Produto1} alt="item-1" />
                        </a>
                        <a href="">
                            <img src={Produto2} alt="item-2" />
                        </a>
                        <a href="">
                            <img src={Produto3} alt="item-3" />
                        </a>
                        <a href="">
                            <img src={Produto4} alt="item-4" />
                        </a>
                    </Carousel.Item>                         
                </Carousel>
            </div>
        </div>
    )
}

export default Featured