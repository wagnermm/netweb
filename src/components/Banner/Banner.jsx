import './Banner.css';
import Container from '../Images/banner-bg.jpg';

const Banner =()=> {
    return(
        <div className="banner">
            <div className="template">
                <h3>Bem-Vindo</h3>
                <div className="line">
                    <div className="line-color"></div>
                </div>
                <p>Olá, seja bem vindo a NetWeb! É um prazer recebê-lo aqui. Nossa loja foi projeteda pensando em você, então fique a vontade e aproveite as nossas ofertas.</p>
                <button type='button' className='view'><a href="./index.htm/">Confira</a></button>
            </div>
            <img src={Container} alt="banner" className='container-img'/>
        </div>
    )
}

export default Banner