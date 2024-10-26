import { useState } from "react";
import Cart from "../components/cart/Cart";
import EmptyCarts from "../components/cart/EmptyCarts";
import OrdersHistory from "../components/cart/OrdersHistory";
import Tabs, { TabType } from "../components/ui/Tabs";
import userStore from "../stores/user";
import { CartProductType, CartType } from "../types/cart";
import { getTodayDate, isCartsEmpty } from "../utils/functions";

export default function CartPage() {
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
        return <div className="px-2 flex flex-col gap-2">
            {
                carts.map((cart: CartType) => (
                    <div className="flex flex-col gap-4">
                        <div className="border rounded-md p-4 bg-white">
                            <h1 className="text-sm font-medium">{getTodayDate(cart?.date||'')||''}</h1>
                            {
                                cart.products.map((product: CartProductType) => (
                                    <Cart key={product.productId} productId={product.productId} quantity={product.quantity} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    }

    return (
        <div className="px-2 flex flex-col gap-2">
            <Tabs tabs={cartTabs} activeTabId={activeTabId} />
            <RenderTab/>
        </div>
    )
}
