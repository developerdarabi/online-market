import { useProductsQuery } from "../../api/products"

export default function MobileSlider() {
    const { data, isFetching } = useProductsQuery()

    if (isFetching) return null
    if(!data)return null
    
    return (
        <div>
            <div className="relative bg-gradient-to-r from-primary to-[#6BD4E8] rounded-xl p-4 flex items-center justify-between">
                <div className="left-1 top-1 w-[100px] h-[100px] bg-white/30 backdrop-blur-md rounded-xl border border-white/20 text-white flex items-center justify-center text-center">
                    <h1 className="text-4xl">50% OFF</h1>
                </div>
                <img src={data[1].image} width={80} height={80} className="mix-blend-multiply " />
            </div>
        </div>
    )
}
