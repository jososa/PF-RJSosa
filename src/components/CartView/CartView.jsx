import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Submit } from "../Submit/Submit"
import trash from "../../assets/trash.svg"
import { Link } from "react-router-dom"

export const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)

    if(cart.length === 0){
        return(
            <section className="container m-auto mt-8">
                <h2 className="text-4xl font-semibold">Tu carrito esta vacío</h2>
                <hr />
                <p>Agrega algún producto a tu carrito</p>
                <Submit><Link to={"/"}>Volver</Link></Submit>
            </section>
        )
    }
    return (
        <section className="container m-auto mt-8">

            <h2 className="text-4xl font-semibold">Tu compra</h2>
            <hr />
                <ul>
                    {
                        cart.map((item) => (
                        <li key={item.id} className="flex gap-3 border-b">
                            <img src={item.img} alt="Cart img" className="w-32"/>
                                <div>
                                    <h3 className="text-2xl">{item.name}</h3>
                                    <p className="text-2xl font-bold">$ {item.price * item.quantity}</p>
                                    <p>Cantidad: {item.quantity}</p>

                                    <Submit onClick={() => removeItem(item.id)}>
                                        <img src={trash} className="w-4" alt="trash" />
                                    </Submit>
                                </div>
                        </li>
                        ))
                    }
                </ul>

            <h4 className="text-4xl font-semibold">Total: ${totalCart()}</h4>

            <Submit onClick={clearCart}>Vaciar carrito</Submit>
            <Submit><Link to="/checkout">Finalizar compra</Link></Submit>

        </section>
    )
}