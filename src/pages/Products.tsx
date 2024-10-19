import AllProducts from "../components/products/AllProducts";
import { MaxWidth } from "../components/ui";
import DocumentTitle from "../utils/DocumentTitle";

export default function ProductsPage() {
    return (
        <MaxWidth>
            <DocumentTitle title="محصولات" />
            <AllProducts />
        </MaxWidth>
    )
}
