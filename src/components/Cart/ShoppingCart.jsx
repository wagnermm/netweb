import {GiShoppingCart} from 'react-icons/Gi';
import './ShoppingCart.css';

function ShoppingCart() {
    return(
        <button type="button"
         className="shopping-cart">
            <GiShoppingCart/>
            <span className="cart-status">0</span>
        </button>
    )
}

export default ShoppingCart