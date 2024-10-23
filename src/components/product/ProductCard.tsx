import { Link, useLocation } from "react-router-dom"
import userStore from "../../stores/user"
import { ProductType } from "../../types/products"
import { checkProductInCart } from "../../utils/functions"
import ProductQuantity from "../ui/ProductQuantity"
import StarRating from "../ui/StarRating"

export default function index(props: ProductType) {
    const { image, title, price, id, rating } = props
    const { addToCart } = userStore()
    const { pathname } = useLocation()

    const foundedProductInCart = checkProductInCart(id)


    const addToCartHandler = () => {
        addToCart({ productId: id, quantity: 1 })
    }

    return (
        <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white hover:shadow-xl duration-300">
            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img className="object-cover m-auto mix-blend-multiply " src={image} alt="product image" />
            </div>
            <div className="mt-4 px-5 pb-5">
                <Link to={`${pathname.endsWith('products') ? id : 'products/' + id}`} className="h-[90px] overflow-hidden">
                    <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">${price}</span>
                    </p>
                    <StarRating rating={rating.rate} count={rating.count} />
                </div>
                {
                    foundedProductInCart ? (
                        <ProductQuantity cartId={78} productId={id} quantity={foundedProductInCart.quantity} />
                    ) : (
                        <button onClick={addToCartHandler} className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:background focus:outline-none focus:ring-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>

    )
}
