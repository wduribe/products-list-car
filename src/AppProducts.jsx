import { CarListProvider } from './context/CarListProvider';
import { MainContent } from './components';
import './AppProducts.css';

export const AppProducts = () => {

	return (
		<CarListProvider>
			<div className='container-general'>
				<MainContent />
			</div>
		</CarListProvider>
	)
}
