import './Style.css';
function ItemListContainer({greeting}){
    return(
        <div className="LstItem">
            <h3>{greeting}</h3>
        </div>
    );
}
export default ItemListContainer;
