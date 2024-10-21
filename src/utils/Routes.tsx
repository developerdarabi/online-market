import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductPage from '../pages/Product'
import ProductsPage from '../pages/Products'
import TemplateWrapper from '../Templates'
import { ProductNotFound } from '../components/product'

export default function RoutesWrapper() {
    return (
        <Routes>
            <Route path='/' element={<TemplateWrapper />} >
                <Route path='/' index element={<HomePage />} />
                <Route path='/products'>
                    <Route index element={<ProductsPage />} />
                    <Route path=':id' element={<ProductPage />} />
                    <Route path='*' element={<ProductNotFound />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
