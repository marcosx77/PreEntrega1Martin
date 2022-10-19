import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { ContextCarrito } from '../../Context/ContextCarrito';
import { useContext } from 'react';

function CartWidget(){
    const { sumaCantidad }=useContext(ContextCarrito);
    const cantidad=sumaCantidad();
    
    // hidden= true flase
    return(
        <div>
            <FontAwesomeIcon icon={faShoppingCart} color={"#FFFFFF"} size={"xl"}/>
            
            <span className='cartwid'>
                {cantidad}
            </span>
            
            
        </div>
    );
}
export default CartWidget;

