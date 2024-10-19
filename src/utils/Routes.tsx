import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductPage from '../pages/Product'
import ProductsPage from '../pages/Products'

export default function RoutesWrapper() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
