import { FaShoppingBag } from "react-icons/fa";

export default function Logo({ size = 50 }: { size?: number }) {
    return (
        <FaShoppingBag size={size} className="text-primary"/>
    )
}
