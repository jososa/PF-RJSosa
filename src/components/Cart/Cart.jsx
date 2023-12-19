import cart from '../../assets/shopping-cart.png'

export const Cart = () => {
    return (
        <div className="flex">
            <a href="#"><img src={cart} alt="Cart"/></a> <p className="text-white text-lg font-semibold px-1">(0)</p>
        </div>

    )
}

export default Cart