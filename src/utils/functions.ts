import userStore from "../stores/user";
import { CartProductType, CartType } from "../types/cart";

export function checkProductInCart(cartId: number,): CartProductType | undefined {
    const carts = userStore(state => state.carts)
    let products: CartProductType[] = []
    carts.map((cart: CartType) => cart.products.map((product: CartProductType) => products.push(product)))
    const foundedProduct = products.find((product: CartProductType) => product.productId === cartId)
    return foundedProduct
}