import Cart from "../components/cart/Cart"
import userStore from "../stores/user"
import { CartProductType, CartType } from "../types/cart"

export default function CartPage() {
    const { carts } = userStore()
    console.log(carts);
    
    return (
        <div className="p-4">
            {
                carts.map((cart: CartType) => (
                    <div className="flex flex-col gap-4">
                        {
                            cart.products.map((product: CartProductType) => (
                                <Cart key={product.productId} productId={product.productId} quantity={product.quantity} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
