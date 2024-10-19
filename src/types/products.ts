export interface ProductType {
    id: number
    category: string
    description: string
    image: string
    price: string
    title: string
    rating: { rate: number, count: number }
}