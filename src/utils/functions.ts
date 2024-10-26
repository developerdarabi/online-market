import userStore from "../stores/user";
import { CartProductType, CartType } from "../types/cart";

export function checkProductInCart(cartId: number,): CartProductType | undefined {
    const carts = userStore(state => state.carts)
    let products: CartProductType[] = []
    carts.map((cart: CartType) => cart.products.map((product: CartProductType) => products.push(product)))
    const foundedProduct = products.find((product: CartProductType) => product.productId === cartId)
    return foundedProduct
}
export function isCartsEmpty(): boolean {
    const carts = userStore(state => state.carts)
    return carts.every(cart => cart.products.length === 0)
}

export function getTodayDate(date:string){
    const todayDate = new Date(date)
    return todayDate.getFullYear()+'/'+todayDate.getUTCMonth()+'/'+todayDate.getDay()
}