import { useEffect, useState } from "react"
import { getData } from "../utils/utils"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const useDetails = () => {
const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)


        // 1) Armo referencia
        const docRef = doc(db , 'products', itemId)

        // 2) Llamo a la referencia
        getDoc(docRef)
                      .then((docSnapshot) => {
                        const doc = {
                            ...docSnapshot.data(),
                            id: docSnapshot.id
                        }

                        setItem(doc)
                        
                      })
                        .finally(() => setLoading(false))
        // getData()
        //     .then(data => {
        //         setItem( data.find(prod => prod.id === Number(itemId)) )
        //     })
        //     .finally(() => setLoading(false))
    }, [])

    return{
        loading,
        item
    }

}