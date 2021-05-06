import './minicart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Cart = () => {
    return(
        <div className="header__top--cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="qtyItems">0</span>
            <span className="textItems">Cart</span>
        </div>
    )
}

export default Cart;