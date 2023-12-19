import { useEffect, useState } from "react"
import { getData } from "../utils/utils"
import { useParams } from "react-router-dom"

export const useDetails = () => {
const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        getData()
            .then(data => {
                setItem( data.find(prod => prod.id === Number(itemId)) )
            })
            .finally(() => setLoading(false))
    }, [])

    return{
        loading,
        item
    }

}