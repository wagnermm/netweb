import './Banner.css';
import Template from '../Images/banner-bg.jpg'

const Banner =()=> {
    return(
        <div className="banner">
            <img src={Template} alt="banner" />
        </div>
    )
}

export default Banner