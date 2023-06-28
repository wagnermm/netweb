import './Banner.css';
import BannerHeader from './img/banner-bg.jpg';

const Banner =()=> {
    return(
        <div className="banner">
            <div className="template">
                <h3>Bem-Vindo</h3>
                <div className="line">
                    <div className="line-color"></div>
                </div>
                <p>Olá, seja bem vindo a NetWeb! É um prazer recebê-lo aqui. Nossa loja foi projeteda pensando em você, então fique a vontade e aproveite as nossas ofertas.</p>
                <button type='button' className='view'><a href="#market">Confira</a></button>
            </div>
            <img src={BannerHeader} alt="banner" className='container-img'/>
        </div>
    )
}

export default Banner