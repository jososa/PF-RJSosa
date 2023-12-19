import { useEffect, useState } from "react"
import { getData } from "../utils/utils"
import { useParams } from "react-router-dom"

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        getData()
        .then((data) => {
            const items = categoryId
                            ? data.filter(prod => prod.category === categoryId)
                            : data
            setProducts(items)
        })
        .finally(() => setLoading(false))
    }, [categoryId])

    return {
        products,
        loading
    }

}