import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiUserCircleLight } from 'react-icons/pi';
import { Link, useLocation } from "react-router-dom";
import { APP_NAME } from "../../Statics";
import userStore from '../../stores/user';
import HomeSlider from '../ui/HomeSlider';
import Logo from "../ui/Logo";

export default function DesktopHeader() {
    const { pathname } = useLocation()

    const user = userStore(state => state.user)

    return (
        <header className={`${pathname === '/' && ''} relative`}>
            <div className=' sticky top-0 left-0 w-full z-[100] mb-4 py-4 bg-white text-primary p-2 px-20 flex items-center justify-between'>
                <Link to={'/'} className="flex items-center justify-center gap-1">
                    <span className="text-xl font-bold text-primary font-serif"><Logo /></span>
                    <h1 className="text-4xl font-bold">{APP_NAME}</h1>
                </Link>
                <div className="flex items-center gap-6">
                    <Link className="text-xl font-medium hover:text-hover duration-100" to={'/'}>Home</Link>
                    <Link className="text-xl font-medium hover:text-hover duration-100" to={'/products'}>Products</Link>
                    <Link className="text-xl font-medium hover:text-hover duration-100" to={'/roles'}>Roles</Link>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <Link to={'cart'} className="bg-background p-3 rounded-full">
                        <AiOutlineShoppingCart size={35} />
                    </Link>
                    {
                        user ? (
                            <Link to={'profile'} className="flex items-center gap-1">
                                <PiUserCircleLight size={65} className="text-primary" />
                                <div className='flex items-start justify-center flex-col'>
                                    <span className="text-md font-bold">{user.name.firstname}</span>
                                    <span className="text-sm opacity-55 font-light">{user.email}</span>
                                </div>
                            </Link>
                        ) : (
                            <>
                                <Link to={'/auth'}>ورود / ثبت نام</Link>
                            </>
                        )
                    }
                </div>
            </div>
            {pathname === '/' && <HomeSlider />}
        </header>
    )
}
