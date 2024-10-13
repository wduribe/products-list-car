import { CarListProductsContext } from "./CarListProductsContext"
import { useCarList } from "../hooks"

export const CarListProvider = ({ children }) => {
    const { carProduct, addProductToCar, deleteProductCar, priceTotalCar } = useCarList();

    return (
        <CarListProductsContext.Provider
            value={{ carProduct, addProductToCar, deleteProductCar, priceTotalCar }}
        >
            {children}
        </CarListProductsContext.Provider>
    )
}
