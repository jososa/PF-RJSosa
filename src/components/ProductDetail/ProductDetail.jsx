import { Link } from "react-router-dom"
import { Submit } from "../Submit/Submit"
import { useContext, useState } from "react"
import { QuantitySelector } from "./QuantitySelector"
import { CartContext } from "../context/CartContext"

export const ProductDetail = ({item}) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart, isInCart } = useContext(CartContext)

  const handleAddTo = () => {
    const itemToCart = {
      ...item,
      quantity
    }
    
    addToCart(itemToCart)

  }

    return (
        <article className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 ml-[50rem] mt-8">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
          <img src={item.img} alt={item.name} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {item.name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${item.price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {item.description}
          </p>
        </div>

        {
          isInCart(item.id)
            ? <Submit> <Link to={"/cart"}>Ver carrito</Link> </Submit>
            : <>
                <QuantitySelector 
                  quantity = {quantity}
                  stock = {item.stock}
                  setQuantity={setQuantity}
                />
                <div className="p-6 pt-0">
                      <Submit onClick={handleAddTo} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
                          <Link to={`/item/${item.id}`}>Agregar al carrito</Link>
                      </Submit>
                </div>
              </>
        }
        
      </article>
    )
}