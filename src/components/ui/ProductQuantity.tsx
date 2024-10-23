import { FaMinus, FaPlus } from "react-icons/fa";
import userStore from "../../stores/user";

export default function ProductQuantity({ cartId, productId, quantity }: { cartId: number, productId: number, quantity: number }) {
    const { changeProductQuantity } = userStore()

    return (
        <div className="flex items-center gap-4 border border-gray-300 w-fit rounded-full p-2 ">
            <button onClick={() => changeProductQuantity({ cartId, productId, quantity: quantity - 1 })}><FaMinus size={18} className="text-gray-600" /></button>
            <span className="text-sm font-medium">{quantity}</span>
            <button onClick={() => changeProductQuantity({ cartId, productId, quantity: quantity + 1 })}><FaPlus size={18} className="text-gray-600" /></button>
        </div>
    )
}
