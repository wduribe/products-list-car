import { useContext, useState } from 'react';
import { CarListProductsContext } from '../context/CarListProductsContext';
import { ItemCarProduct, ModalConfirm } from './';
import carEmpty from '../icons/illustration-empty-cart.svg'
import './CarProducts.css';





export const CarProdcuts = () => {
	const [showConfirmModal, setshowConfirmModal] = useState(false);
	const { carProduct, priceTotalCar } = useContext( CarListProductsContext );
	
	const setConfirmOrder = () => {
		setshowConfirmModal( !showConfirmModal );
	}

	return (
		<div className='container-car'>
			<h2>Your Cart ( { carProduct && priceTotalCar !== 0 ? carProduct.length : 0 } )</h2>
			{
				carProduct.length === 0 || priceTotalCar === 0
					?
					<div className='container-img-empty'>
						<img src={carEmpty} alt="img-car-empty" />
						<p className='description-empty'>Your added items will appear here</p>
					</div>
					:
					<div>
						<ul className='container-list-car'>
							{carProduct.map( itemCar => <ItemCarProduct key={ itemCar.id } {...itemCar	}/>)}
						</ul>
						<div className='container-total-price'>
							<div>
								<p>Order Total</p> <strong> ${ priceTotalCar }</strong>
							</div>
							<button onClick={ setConfirmOrder }>Confirm Order</button>
						</div>
					</div>
			}
			{showConfirmModal&&<ModalConfirm/>}
			
		</div> 
	)
}
