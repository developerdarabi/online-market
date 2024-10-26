import { Link, useLocation } from "react-router-dom"
import userStore from "../../stores/user"
import { ProductType } from "../../types/products"
import { checkProductInCart } from "../../utils/functions"
import ProductQuantity from "../ui/ProductQuantity"
import StarRating from "../ui/StarRating"

export default function index(props: ProductType) {
    const { image, title, price, id, rating } = props
    const { addToCart,carts } = userStore()
    const { pathname } = useLocation()
    console.log(carts);
    
    const foundedProductInCart = checkProductInCart(id)
 

    const addToCartHandler = () => {
        addToCart({ productId: id, quantity: 1 })
    }

    return (
        <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white hover:shadow-md duration-300">
            <div className="relative sm:mx-3 mx-1 mt-3 flex sm:h-60 sm:aspect-none aspect-[4/3] overflow-hidden rounded-xl">
                <img className="sm:object-cover object-fill m-auto mix-blend-multiply " src={image} alt="product image" />
            </div>
            <div className="mt-4 sm:px-5 px-2 pb-4">
                <Link to={`${pathname.endsWith('products') ? id : 'products/' + id}`} className="h-[90px] overflow-hidden">
                    <h5 className="sm:text-xl text-xs font-medium tracking-tight text-slate-900">{title.length>17?title.substring(0,17)+'...':title}</h5>
                </Link>
                <div className="mt-2 sm:mb-5 mb-1 flex items-center justify-between w-full">
                    <span className="sm:text-3xl text-md font-bold text-slate-900">${price}</span>
                    <StarRating rating={rating.rate} count={rating.count} className="sm:visible invisible"/>
                </div>
                {
                    foundedProductInCart ? (
                        <ProductQuantity cartId={78} productId={id} quantity={foundedProductInCart.quantity} />
                    ) : (
                        <button onClick={addToCartHandler} className="flex items-center justify-center w-full rounded-md bg-primary px-5 sm:py-3 py-1 text-center sm:text-sm text-xs font-medium whitespace-nowrap text-white ">
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
