import { Submit } from "../Submit/Submit"

export const QuantitySelector = ({quantity, stock, setQuantity}) => {

    const handleAdd = () => {
        quantity < stock && setQuantity(quantity + 1)
      }
    
      const handleSubstract = () => {
        quantity > 1 && setQuantity(quantity - 1)
      }

    return (
        <div className="flex gap-2 items-center p-6">
            <Submit onClick={handleSubstract}>-</Submit>
            <span>{quantity}</span>
            <Submit onClick={handleAdd}>+</Submit>
      </div>
    )

}