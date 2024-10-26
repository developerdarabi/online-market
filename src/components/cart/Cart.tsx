import { Link } from "react-router-dom";
import { useProductsQuery } from "../../api/products";
import ProductQuantity from "../ui/ProductQuantity";

export default function Cart({ productId, quantity }: { productId: number, quantity: number }) {
    const { data } = useProductsQuery()
    const product = data?.find(product => product.id === productId)

    return (
        <div className="border shadow rounded-xl w-full p-4 flex gap-4   bg-background">
            <img src={product?.image} className="w-[70px] h-[70px]" />
            <div className="flex flex-col gap-3">
                <Link to={'/products/' + product?.id}><h1 className="text-sm font-medium">{product?.title}</h1></Link>
                <ProductQuantity cartId={78} productId={productId} quantity={quantity} />
            </div>
        </div>
    )
}
