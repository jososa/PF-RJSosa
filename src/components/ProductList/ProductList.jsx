
import { Loader } from "../Loader/Loader"
import { Product } from "../Product/Product"
import { useProducts } from "../hooks/useProducts"

export const ProductList = () => {
    const {products, loading} = useProducts()

    return (

        <>
            {
                loading
                    ? <Loader/>
                    : <Product products={products}/>
            }
        </>

    )

}