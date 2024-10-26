import { CgMenuGridR } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useCategoriesQuery } from "../../api/category";
import clothSrc from '../../assets/clothes/brand.png';
import cloth2Src from '../../assets/clothes/clothes.png';
import cloth3Src from '../../assets/clothes/laundry.png';
import cloth4Src from '../../assets/clothes/polo-shirt.png';

const clothesImages = [clothSrc, cloth2Src, cloth3Src, cloth4Src]

export default function MobileCategories() {
    const { data, isFetching } = useCategoriesQuery()

    return (
        <div className="flex items-center justify-start gap-3 overflow-x-auto">
            <Link to={'/products'} className="flex items-center justify-center bg-white text-primary rounded-xl px-2 py-1">
                <CgMenuGridR size={20} />
                <span className="text-sm font-medium mt-1">ALL</span>
            </Link>
            {
                data?.map((category: string,index) => (
                    <Link to={'/products?category='+category} className="flex gap-2 items-center justify-center bg-white text-primary rounded-xl px-5 py-1">
                        <img src={clothesImages[index]} width={20} height={20}/>
                        <span className="text-sm font-medium whitespace-nowrap mt-1">{category}</span>
                    </Link>
                ))
            }
        </div>
    )
}
