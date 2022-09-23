import React from 'react';
import './CartWidget';
import CartWidget from './CartWidget';
import './Style.css';

function NavBar(){
    return(
        <div className="Nvar">
            <h2>SportNew</h2>
            
            {/* <AppContainer/> */}
            <ul>
                <li><a href="#">Marcas</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#">Calzado</a></li>
                <li><a href="#">Indumentaria</a></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

class AppContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            opciones:['Indumentaria','Calzado','Accesorios','Marcas','SobreNosotros']
        };
    }

    render () {
        const item=this.state.opciones.map(t => (<item valor={t}/>));
        return (
            <div>
                <ul>{item}</ul>
            </div>
        );
    }
}

export default NavBar;