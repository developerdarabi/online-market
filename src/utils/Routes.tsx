import { Route, Routes } from 'react-router-dom'
import { ProductNotFound } from '../components/product'
import AuthPage from '../pages/Auth'
import HomePage from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductPage from '../pages/Product'
import ProductsPage from '../pages/Products'
import ProfilePage from '../pages/Profile'
import TemplateWrapper from '../Templates'
import CheckUserInfo from './CheckUserInfo'
import { ProtectedRoute } from './ProtectedRoute'
import CartPage from '../pages/Cart'

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
                    <Route path='profile' element={<ProtectedRoute element={<ProfilePage />} isMustLogin={true} />} />
                    <Route path='cart' element={<CartPage />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </CheckUserInfo>
    )
}
