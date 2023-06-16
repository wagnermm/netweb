import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Products.css';
import Produto1 from '../Images/product-01.jpg';
import Produto2 from '../Images/product-02.jpg';
import Produto3 from '../Images/product-03.jpg';

const Products=()=> {
    return(
        <div>
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