import './Banner.css';
import Container from '../Images/banner-bg.jpg'

const Banner =()=> {
    return(
        <div className="banner">
            <div className="template">
                <h3>Welcome</h3>
                <div className="line">
                    <div className="line-color"></div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, aliquid. Voluptatibus similique voluptatem est, eius maxime aperiam doloribus. Ea deleniti optio minima iste!</p>
                <button type='button' className='view'><a href="./index.htm/">view</a></button>
            </div>
            <img src={Container} alt="banner" className='container-img'/>
        </div>
    )
}

export default Banner