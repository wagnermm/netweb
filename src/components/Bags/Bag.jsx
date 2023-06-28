import './Bag.css';
import BagsBanner from './img/bannerBags.jpg';
import Bag1 from './img/bags.jpg';
import Bag2 from './img/bolsa2.jpg';
import Bag3 from './img/bolsa3.jpg';

const Bag=()=> {
    return(
        <div className="bag-container">
            <div className="bagsBanner">
                <div className="bag-template">
                    <h2>Combinação perfeita para o seu dia a dia</h2>
                    <h1>A partir de R$ 89,90</h1>
                    <button className='conferir'><a href="#bolsas">Confira</a></button>
                </div>
                <img src={BagsBanner} alt="bags"/>
            </div>
            <div className="bags-content" id='bolsas'>
                <div className="bag-card">
                    <img src={Bag1} alt="bolsa"/>
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag2} alt="bolsa"/>
                    <div className="bag-info">
                        <p>Bolsa-y R$ 139,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag3} alt="bolsa"/>
                    <div className="bag-info">
                        <p>Bolsa-z R$ 89,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src="" alt="bolsa" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bag