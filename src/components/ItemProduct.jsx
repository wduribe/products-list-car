import { useState, useContext, useMemo } from 'react';
import { CarListProductsContext } from '../context/CarListProductsContext';
import carLogo from '../icons/icon-add-to-cart.svg'
import incrementIcon from '../icons/icon-increment-quantity.svg'
import decrementIcon from '../icons/icon-decrement-quantity.svg'


export const ItemProduct = ({ product }) => {

    const [bottomAddProduct, setBottomAddProduct] = useState(false);

    const { addProductToCar, carProduct, deleteProductCar } = useContext( CarListProductsContext );

    const existProduct = carProduct.some( productItem => productItem.id === product.id );
    if(!existProduct){
        product.cant = 0;
    }

    const hiddeButton = () => {
        setBottomAddProduct(!bottomAddProduct);
        incrementProduct();
    }

    const incrementProduct = () => {
      product.cant +=1;
      addProductToCar( product );
    }

    const decrementProduct = () => {
        if(product.cant === 1){
            deleteProductCar(product.id);
            return;
        };
        if(product.cant === 0) return;
        product.cant -=1;
        addProductToCar( product );
    }

    return (
        <div key={product.id}>
            <picture>
                <source media='(max-width: 320px)' srcSet={product.imgMobile} />
                <source media='(max-width: 500px)' srcSet={product.imgMobile} />
                <source media='(max-width: 1024px)' srcSet={product.imgTable} />
                <source media='(min-width: 1024px)' srcSet={product.imgDesktop} />
                <img className={`section_img ${bottomAddProduct && 'active-border'}`} src={product.imgDesktop} alt={product.name} />
                <div className='container-footer-products'>
                    <div className={`container-buttom ${bottomAddProduct ? 'bgColorBottom' : 'bgWhiteColor'}`}>
                        {
                            bottomAddProduct
                                ?
                                <div className='container-bottoms-increment-decrement'>
                                    <button onClick={decrementProduct} className='btn-decrement'><img src={decrementIcon} alt="decrement-icon" /></button>
                                    {!existProduct ? product.cant : product.cant}
                                    <button onClick={incrementProduct} className='btn-increment'><img src={incrementIcon} alt="increment-icon" /></button>
                                </div>
                                :
                                <button
                                    onClick={hiddeButton}
                                    className={`buttom-normal`}>
                                    <img className='car-add' src={carLogo} /> Add to card
                                </button>
                        }
                    </div>
                    <div className='container-info'>
                        <p className='p-name'>{product.name}</p>
                        <strong>{product.description}</strong>
                        <p className='p-price'> $ {product.price}</p>
                    </div>
                </div>
            </picture>
        </div>
    )
}
