 import './Footer.css';
 
 const Footer=()=> {
    return(
        <div className="footer-container" id='contact'>
            <div className="line-footer">
                <div className="line-center"></div>
            </div>
            <section className='menus'>
                <ul>
                    <li><div className="title">Net Web</div></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Trabalhe Conosco</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Guia NetWeb</a></li>
                </ul>
            </section>
        </div>
    )
 }

 export default Footer