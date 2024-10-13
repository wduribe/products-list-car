import { CarProdcuts } from './';
import { products } from '../products/products';
import { ItemProduct } from './';
import './MainContent.css';



export const MainContent = () => {

	return (
		<main className='main'>
			<div className='container-products'>
				<h1 >Desserts</h1>
				<section className='main_section'>
					{products.map(product => <ItemProduct key={product.id} product={product} />)}
				</section>
			</div>
			<CarProdcuts/>
		</main>
	)
}
