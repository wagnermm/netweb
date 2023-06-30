 import './Footer.css';
 import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
 
 const Footer=()=> {
    return(
        <div className="footer-container" id='information'>
            <div className="line-footer">
                <div className="line-center"></div>
            </div>
            <section className='menus'>
                <ul>
                    <li><div className="title">Institucional</div></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Trabalhe Conosco</a></li>
                    <li><a href="#">Soluções Corporativas</a></li>
                    <li><a href="#">Programa de Integridade</a></li>
                    <li><a href="#">Regulamentos</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Guia NetWeb</a></li>
                </ul>
                <ul>
                    <li><div className="title">Ajuda</div></li>
                    <li><a href="#">Trocas e Devoluções</a></li>
                    <li><a href="#">Entregas</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                    <li><a href="#">Pagamentos</a></li>
                    <li><a href="#">Cancelamentos</a></li>
                    <li><a href="#">Segurança e Privacidade</a></li>
                    <li><a href="#">Como Comprar</a></li>
                    <li><a href="#">Acessibilidade</a></li>
                </ul>
                <ul>
                    <li><div className="title">NetWeb Empresas</div></li>
                    <li><a href="#">Market Place NetWeb</a></li>
                </ul>
                <ul>
                    <li><div className="title">Central de Relacionamento</div></li>
                    <li><a href="#"><button className='btn-footer'>Tire suas dúvidas</button></a></li>
                </ul>
                <ul className='social-midias'>
                    <li><a href="#"><FaFacebook/></a></li>
                    <li><a href="#"><FaInstagram/></a></li>
                    <li><a href="#"><FaTwitter/></a></li>
                    <li><a href="#"><FaYoutube/></a></li>
                </ul>
            </section>
        </div>
    )
 }

 export default Footer