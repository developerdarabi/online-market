import { FaPlus,FaMinus } from "react-icons/fa6";
import { useProductsQuery } from "../../api/products";
import { Link } from "react-router-dom";

export default function Cart({ productId, quantity }: { productId: number, quantity: number }) {
    const { data } = useProductsQuery()
    const product = data?.find(product => product.id === productId)

    return (
        <div className="border shadow rounded-xl w-full p-4 flex gap-2">
            <img src={product?.image} className="w-[70px] h-[70px]" />
            <div className="flex flex-col gap-3">
                <Link to={'/products/'+product?.id}><h1 className="text-sm font-medium">{product?.title}</h1></Link>
                <div className="flex items-center gap-2">
                    <FaMinus size={20} />
                    {quantity}
                    <FaPlus size={20} />
                </div>
            </div>
        </div>
    )
}