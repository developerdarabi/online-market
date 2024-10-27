import { FaMinus, FaPlus } from "react-icons/fa";
import userStore from "../../stores/user";

export default function ProductQuantity({ cartId, productId, quantity }: { cartId?: null | number, productId: number, quantity: number }) {
    const { changeProductQuantity } = userStore()

    return (
        <div className="flex items-center gap-2 justify-center border border-gray-300 w-fit rounded-full p-1 h-fit px-2">
            <button onClick={() => cartId && changeProductQuantity({ cartId, productId, quantity: quantity - 1 })}><FaMinus size={12} className="text-gray-600" /></button>
            <span className="text-sm font-medium mt-1">{quantity}</span>
            <button onClick={() => cartId && changeProductQuantity({ cartId, productId, quantity: quantity + 1 })}><FaPlus size={12} className="text-gray-600" /></button>
        </div>
    )
}
