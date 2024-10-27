import userStore from "../stores/user";
import { CartProductType, CartType } from "../types/cart";
import { ProductType } from "../types/products";

export function checkProductInCart(cartId: number,): CartProductType | undefined {
    const carts = userStore(state => state.carts)
    let products: CartProductType[] = []
    carts.map((cart: CartType) => cart.products.map((product: CartProductType) => products.push(product)))
    const foundedProduct = products.find((product: CartProductType) => product.productId === cartId)
    return foundedProduct
}
export function isCartsEmpty(): boolean {
    const carts = userStore(state => state.carts)
    if (!carts || carts.length === 0) return true
    return carts?.every?.(cart => cart?.products?.length === 0)
}

export function getTodayDate(date: string) {
    const formattedDate = new Date(date);

    // Format the date parts
    const year = formattedDate.getFullYear();
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(formattedDate.getDate()).padStart(2, '0');
    const hours = String(formattedDate.getHours()).padStart(2, '0');
    const minutes = String(formattedDate.getMinutes()).padStart(2, '0');

    // Construct the formatted date string
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
export function getProductSummaryTitle(title: string) {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
}
export function calculateCheckout(products: ProductType[]) {
    const carts = userStore(state => state.carts)
    if (isCartsEmpty()) return 0
    return carts.reduce((total, cart) => {
        return total + cart.products.reduce((cartTotal, product) => {
            // Find the product by productId
            const foundProduct = products.find(p => p.id === product.productId);

            // If product is found, calculate the total price
            if (foundProduct) {
                
                //@ts-ignore
                return cartTotal + (product.quantity * foundProduct.price);
            }

            return cartTotal; // If not found, just return the cart total unchanged
        }, 0);
    }, 0).toFixed(2);
}