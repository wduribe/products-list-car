import { useContext } from 'react';
import { CarListProductsContext } from '../context/CarListProductsContext';
import confirmIcon from '../icons/icon-order-confirmed.svg'
import './ModalConfirm.css';

export const ModalConfirm = () => {

    
    const { carProduct, priceTotalCar } = useContext(CarListProductsContext);

    const refreshPage = () => {
        window.location.reload(true);
    }
    
    return (
        <div className='container-modal'>
            <div className='modal'>
                <img className='img-icon' src={ confirmIcon } alt="confirm" />
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food</p>
                <ul>
                    { carProduct.map( product => {
                        return<li key={ product.id }>
                            <div className='container-description-modal'>
                                <img src={ product.imgMobile } alt="" />
                                <div className='description'>
                                    <strong>{ product.name }</strong>
                                    <p><span>{ product.cant }x </span>@ {product.price}</p>
                                </div>
                                
                            </div>
                            <strong> $ { product.cant * product.price }</strong>
                    </li>
                    }) }
                </ul>
                <div className='container-price-total'>
                    <span>Order Total</span>    
                    <strong> $ { priceTotalCar } </strong>
                </div>
                <button onClick={ refreshPage } >Start New Oder</button>
                </div>
        </div>
    )
}
