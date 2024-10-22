import { Route, Routes } from 'react-router-dom'
import { ProductNotFound } from '../components/product'
import AuthPage from '../pages/Auth'
import HomePage from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductPage from '../pages/Product'
import ProductsPage from '../pages/Products'
import TemplateWrapper from '../Templates'
import CheckUserInfo from './CheckUserInfo'
import { ProtectedRoute } from './ProtectedRoute'

export default function RoutesWrapper() {
    return (
        <CheckUserInfo>
            <Routes>
                <Route path='/' element={<TemplateWrapper />} >
                    <Route path='/' index element={<HomePage />} />
                    <Route path='/products'>
                        <Route index element={<ProductsPage />} />
                        <Route path=':id' element={<ProductPage />} />
                        <Route path='*' element={<ProductNotFound />} />
                    </Route>
                    <Route path='auth' element={<ProtectedRoute element={<AuthPage />} isMustLogin={false} />} />
                    <Route path='profile' element={<ProtectedRoute element={<div>profile</div>} isMustLogin={true} />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </CheckUserInfo>
    )
}
