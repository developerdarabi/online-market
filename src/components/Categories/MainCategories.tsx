import { Link } from "react-router-dom"
import { useCategoriesQuery } from "../../api/category"
import clothSrc from '../../assets/clothes/brand.png'
import cloth2Src from '../../assets/clothes/clothes.png'
import cloth3Src from '../../assets/clothes/laundry.png'
import cloth4Src from '../../assets/clothes/polo-shirt.png'
import CategoriesLoading from "./Loading"

const clothesImages = [clothSrc, cloth2Src, cloth3Src, cloth4Src]

export default function MainCategories() {
    const { data, isFetching } = useCategoriesQuery()

    if (isFetching) return <CategoriesLoading />

    if (!data) return

    return (
        <div className="grid xl:grid-cols-6 grid-cols-4 gap-10">
            {
                isFetching ? (<CategoriesLoading />) :
                    data.map((category: string, index: number) => (
                        <Link to={'products?category=' + category} key={category} className="border shadow bg-background rounded-md p-4 flex flex-col gap-2 justify-center items-center">
                            <img src={clothesImages[index]} className="w-[75px] h-[75px]" />
                            <span className="text-sm font-bold">{category}</span>
                        </Link>
                    ))

            }
        </div>
    )
}
