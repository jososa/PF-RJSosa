import { Loader } from "../Loader/Loader"
import { ProductDetail } from "../ProductDetail/ProductDetail"
import { useDetails } from "../hooks/useDetails"

export const ProductDetailContainer = () => {
    const {item, loading} = useDetails()

    return(
        <>
            {
                loading 
                    ? <Loader/>
                    : <ProductDetail item={item}/>
            }
        </>
    )

}