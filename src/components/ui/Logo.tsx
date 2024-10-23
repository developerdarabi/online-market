import { FaShoppingBag } from "react-icons/fa";
import { APP_NAME } from "../../Statics";

export default function Logo({ size = 50 }: { size?: number }) {
    return (
        <div className="flex items-center justify-center gap-1">
            <span className="text-xl font-bold text-primary font-serif"><FaShoppingBag size={size} className="text-primary" /></span>
            <h1 className="text-4xl font-bold text-primary">{APP_NAME}</h1>
        </div>
    )
}
