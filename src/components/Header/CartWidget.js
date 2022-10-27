import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { ContextCarrito } from '../../Context/ContextCarrito';
import { useContext } from 'react';

function CartWidget(){
    const { sumaCantidad }=useContext(ContextCarrito);
    
    return(
        <div>
            <FontAwesomeIcon icon={faShoppingCart} color={"#FFFFFF"} size={"xl"}/>
            <span className='cartwid'  style={{ visibility: sumaCantidad() === 0 ? 'hidden' : 'visible', textDecoration: 'none'} }>
                {sumaCantidad()}
            </span>
        </div>
    );
}
export default CartWidget;

