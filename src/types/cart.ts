export interface CartType {
    id: null | number,
    userId: null | 3,
    date: null|string,
    products: CartProductType[],
}


export interface CartProductType {
    productId: number
    quantity: number
}