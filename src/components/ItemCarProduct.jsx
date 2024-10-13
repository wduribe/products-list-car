
import { useContext } from 'react';
import { CarListProductsContext } from '../context/CarListProductsContext';
import './ItemCarProduct.css';


export const ItemCarProduct = ({ id, name, description, price, cant }) => {

    const { deleteProductCar } = useContext( CarListProductsContext );
    
    const handleDeleteProduct = () => {
        deleteProductCar(id);
    }

    return (
        <>
            {
                cant!==0&&(<li className="item-list">
                <p className='description'>{description}</p>
                <div className='price-total-item-car' >
                    <p> {cant}x <span>@{price} = {price * cant} pesos </span>  </p>
                    <button className='btn-delete-product' onClick={ handleDeleteProduct }>X</button>
                </div>
            </li>)
            }
        </>
        
    );
}
