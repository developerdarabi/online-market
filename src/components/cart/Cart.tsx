import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useProductsQuery } from "../../api/products";
import userStore from "../../stores/user";
import { getProductSummaryTitle } from "../../utils/functions";
import ProductQuantity from "../ui/ProductQuantity";

export default function Cart({ productId, quantity, cartId }: { productId: number, quantity: number, cartId?: null | number }) {
    const { data } = useProductsQuery()
    const { removeProductFromCart } = userStore()
    const product = data?.find(product => product.id === productId)

    return (
        <div className="relative border shadow-md rounded-xl w-full p-4 flex gap-4   bg-white">
            <div className="absolute left-0 top-0 bg-red-100 rounded-br-xl p-1" onClick={() => cartId && removeProductFromCart({ cartId: cartId, productId: productId })}>
                <CgClose size={15} className="text-red-600" />
            </div>
            <img src={product?.image} className="w-[70px] h-[70px] mix-blend-multiply" />
            <div className="flex flex-row gap-3 justify-between w-full">
                <div className="flex flex-col justify-between py-2">
                    <Link to={'/products/' + product?.id}><h1 className="text-sm font-medium">{getProductSummaryTitle(product?.title || '')}</h1></Link>
                    <span className="text-sm font-medium opacity-60">{product?.price || 0 * quantity} $</span>
                </div>
                <ProductQuantity cartId={cartId} productId={productId} quantity={quantity} />
            </div>
        </div>
    )
}
