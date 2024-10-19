import { ProductCard } from ".";
import { useProductsQuery } from "../../api/products";
import { ProductType } from "../../types/products";
import ProductsLoading from "./Loading";

export default function AllProducts({ limitationCount = null }: { limitationCount?: number | null }) {
    const { data, isFetching } = useProductsQuery()

    return (
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 p-4 justify-center ">
            {
                isFetching ? <ProductsLoading /> :
                    data?.slice(0, limitationCount ? limitationCount : data.length).map((product: ProductType) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            id={product.id}
                            rating={product.rating}
                            category={product.category}
                            description={product.description}
                        />
                    ))
            }
        </div>
    )
}
