import './Bag.css';
import BagsBanner from './img/bannerBags.jpg';
import Bag1 from './img/bolsa1.jpg';
import Bag2 from './img/bolsa2.jpg';
import Bag3 from './img/bolsa3.jpg';
import Bag4 from './img/bolsa4.jpg';
import Bag5 from './img/bolsa5.jpg';
import Bag6 from './img/bolsa6.jpg';
import Bag7 from './img/bolsa7.jpg';
import Bag8 from './img/bolsa8.jpg';
import Bag9 from './img/bolsa9.jpg';
import Bag10 from './img/bolsa10.jpg';
import Bag11 from './img/bolsa11.jpg';
import Bag12 from './img/bolsa12.jpg';

const Bag=()=> {
    return(
        <div className="bag-container">
            <div className="bagsBanner">
                <div className="bag-template">
                    <h2>Combinação perfeita para o seu dia a dia</h2>
                    <h1>A partir de R$ 99,90</h1>
                    <button className='conferir'><a href="#bolsas">Confira</a></button>
                </div>
                <img src={BagsBanner} alt="bags"/>
            </div>
            <div className="bags-content" id='bolsas'>
                <div className="bag-card">
                    <img src={Bag1} alt="bolsa 1"/>
                    <div className="bag-info">
                        <p>Bolsa-x R$ 99,90</p>
                        <button className='bolsa-comprar'><a href="#">Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag2} alt="bolsa 2"/>
                    <div className="bag-info">
                        <p>Bolsa-y R$ 139,90</p>
                        <button className='bolsa-comprar'><a href="#">Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag3} alt="bolsa 3"/>
                    <div className="bag-info">
                        <p>Bolsa-z R$ 89,90</p>
                        <button className='bolsa-comprar'><a href="#">Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag4} alt="bolsa 4" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 119,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag5} alt="bolsa 5" />
                    <div className="bag-info">
                        <p>Bolsa-y R$ 89,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag6} alt="bolsa 6" />
                    <div className="bag-info">
                        <p>Bolsa-z R$ 159,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag7} alt="bolsa 7" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 299,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag8} alt="bolsa 8" />
                    <div className="bag-info">
                        <p>Bolsa-y R$ 119,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag9} alt="bolsa 9" />
                    <div className="bag-info">
                        <p>Bolsa-z R$ 199,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag10} alt="bolsa 10" />
                    <div className="bag-info">
                        <p>Bolsa-x R$ 299,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag11} alt="bolsa 11" />
                    <div className="bag-info">
                        <p>Bolsa-y R$ 99,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
                <div className="bag-card">
                    <img src={Bag12} alt="bolsa 12" />
                    <div className="bag-info">
                        <p>Bolsa-z R$ 139,90</p>
                        <button className='bolsa-comprar'><a href='#'>Comprar</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bag