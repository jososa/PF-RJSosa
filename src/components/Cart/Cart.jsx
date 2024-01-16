import { Link } from 'react-router-dom'
import cart from '../../assets/shopping-cart.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const { itemsInCart } = useContext(CartContext)
    return (
        <Link to={"/cart"} className="flex">
            <img src={cart} alt="Cart"/> <span className="text-white text-lg font-semibold px-1">({itemsInCart()})</span>
        </Link>

    )
}

export default Cart