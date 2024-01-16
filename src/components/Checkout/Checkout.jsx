import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc, doc, updateDoc, getDocs, writeBatch, query, where, documentId } from "firebase/firestore"
import  Swal  from 'sweetalert2'



export const Checkout = () => {

    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        name: "",
        address: "",
        email: ""
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
         setValues({
            ...values,
            [e.target.name]: e.target.value
         })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const order = {
            client: values,
            items: cart,
            total: totalCart(),
            date: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productsRef = collection(db, 'products')
        const productsQuery = query(productsRef, where(documentId(), 'in', cart.map(prod => prod.id)))
        const querySnapshot = await getDocs(productsQuery)

        const outOfStock = []

        querySnapshot.docs.forEach(doc => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if(stock >= item.quantity){
                batch.update(doc.ref, {
                    stock: stock - item.quantity
                })
            } else {
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0){
            batch.commit()
                        .then(() => {
                            addDoc(ordersRef, order)
                            .then(doc => setOrderId(doc.id))
                            clearCart()
                            Swal.fire("Gracias por tu compra!")
                        })
        } else{
                Swal.fire("Hay productos sin stock")
        }

    }

    if(orderId){
        return(
            <div className="container m-auto mt-10">
                <h2 className="text-4xl font-semibold">Confirmación de la compra</h2>
                <hr />
                <p>Su código de orden es: {orderId}</p>
            </div>
        )
    }

    return (
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold">Checkout</h2>
            <hr />
            <h4>Ingrese sus datos:</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                
                <input className="border p-2" type="text" placeholder="Tu nombre" onChange={handleInputChange} value={values.name} name="name"/>
                <input className="border p-2" type="text" placeholder="Tu dirección" onChange={handleInputChange} value={values.address} name="address"/>
                <input className="border p-2" type="email" placeholder="Tu email" onChange={handleInputChange} value={values.email} name="email"/>

                <button className="bg-blue-500 text-white py-2" type="submit">Enviar</button>
                
            </form>
        </div>
    )
}