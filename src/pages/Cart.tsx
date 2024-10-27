import { useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useProductsQuery } from "../api/products";
import Cart from "../components/cart/Cart";
import EmptyCarts from "../components/cart/EmptyCarts";
import OrdersHistory from "../components/cart/OrdersHistory";
import { MaxWidth } from "../components/ui";
import Tabs, { TabType } from "../components/ui/Tabs";
import userStore from "../stores/user";
import { CartProductType, CartType } from "../types/cart";
import { calculateCheckout, getTodayDate, isCartsEmpty } from "../utils/functions";

export default function CartPage() {
    const { data } = useProductsQuery()
    const cartTabs: TabType[] = [
        {
            id: 0,
            title: 'Current orders',
            onClick: (id: number) => setActiveTabId(id)
        },
        {
            id: 1,
            title: 'Orders history',
            onClick: (id: number) => setActiveTabId(id)
        },
    ]
    const { carts } = userStore()

    const [activeTabId, setActiveTabId] = useState<number>(cartTabs[0].id)

    const RenderTab = () => {
        if (activeTabId === 1) return <OrdersHistory />
        if (isCartsEmpty()) return <EmptyCarts />
        return <div className="px-2 flex flex-col gap-8 pb-20">
            {
                carts.map((cart: CartType) => cart.products.length === 0 ? null : (
                    <div className="flex flex-col gap-4" key={cart.id}>
                        <h1 className="text-xs font-light">{getTodayDate(cart?.date || '') || ''}</h1>
                        {
                            cart.products.map((product: CartProductType) => (
                                <Cart key={product.productId} productId={product.productId} quantity={product.quantity} cartId={cart.id} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    }
    const checkoutCount = calculateCheckout(data || [])

    const getCheckoutComponent = useMemo(() => {
        return <div className="md:relative fixed md:w-1/3 w-full md:bottom-0 bottom-14 md:mt-0 mt-auto border bg-white p-4 left-0 pb-4 flex justify-between">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium  text-gray-500">Total</span>
                <span className="text-sm font-medium">{checkoutCount}</span>
            </div>
            <Link to={'checkout'} className="bg-primary px-2 py-1 flex items-center h-fit text-white rounded-xl">
                <span>Checkout</span>
                <IoIosArrowForward size={20} />
            </Link>
        </div>
    }, [data, checkoutCount])

    return (
        <MaxWidth className="pb-8 md:flex items-start justify-start">
            {!isCartsEmpty() && getCheckoutComponent}
            <div className="md:w-2/3">
                <Tabs tabs={cartTabs} activeTabId={activeTabId} />
                <RenderTab />
            </div>
        </MaxWidth>
    )
}
