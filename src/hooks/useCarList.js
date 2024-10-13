import { useState, useEffect } from 'react';

export const useCarList = () => {

	const [carProduct, setcarProduct] = useState([]);
	const [priceTotalCar, setPriceTotalCar] = useState(0);

	useEffect(() => {
		const total = calcPriceTotal();
		setPriceTotalCar(total);
	}, [carProduct]);


	const addProductToCar = (productAdded) => {
		const existProduct = carProduct.some(product => product.id === productAdded.id);
		if (!existProduct) {
			setcarProduct([...carProduct, productAdded]);
			return;
		}
		const cantUpdated = carProduct.map(product => {
			if (product.id === productAdded.id) {
				return productAdded;
			}
			return product;
		});
		setcarProduct(cantUpdated);
	}

	const deleteProductCar = (id) => {
		const existProduct = carProduct.some(product => product.id === id);
		if (existProduct) {
			const newProductList = carProduct.filter(product => product.id !== id);
			setcarProduct(newProductList);
		}
	}

	const calcPriceTotal = () => {
		const total = carProduct.reduce((allProducts, product) => {
			return allProducts += product.price * product.cant;
		}, 0);
		return total;
	}

	return {
		//Methods
		addProductToCar,
		deleteProductCar,

		//Variables
		priceTotalCar,
		carProduct,
	}
}