import { useEffect, useState } from "react"
import { getData } from "../utils/utils"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config.js"

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        // 1) Armo referencia (sync)
        const productsRef = collection(db,'products')
        const docsRef = categoryId
                            ?   query(productsRef, where('category', '==', categoryId))
                            :   productsRef

        // 2) Llamo a la referencia (async)
        getDocs(docsRef).then((querySnapshot)=>{
            const docs = querySnapshot.docs.map(doc => {
                return{
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProducts(docs)
        }).finally(() => setLoading(false))


        // getData()
        // .then((data) => {
        //     const items = categoryId
        //                     ? data.filter(prod => prod.category === categoryId)
        //                     : data
        //     setProducts(items)
        // })
        // .finally(() => setLoading(false))
    }, [categoryId])

    return {
        products,
        loading
    }

}