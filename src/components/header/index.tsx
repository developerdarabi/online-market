import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiUserCircleLight } from 'react-icons/pi';
import { Link, useLocation } from "react-router-dom";
import userStore from '../../stores/user';
import HomeSlider from '../ui/HomeSlider';
import Logo from "../ui/Logo";

export default function DesktopHeader() {
    const { pathname } = useLocation()

    const user = userStore(state => state.user)

    return (
        <header className={`${pathname === '/' && ''} relative`}>
            <div className=' w-full z-[100] mb-4 py-4 bg-[#05678E] text-white p-2 px-20 flex items-center justify-between'>
                <div><span className="text-xl font-bold text-indigo-500 font-serif"><Logo /></span></div>
                <div className="flex items-center gap-6">
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/'}>Home</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/products'}>Products</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/roles'}>Roles</Link>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                    {
                        user ? (
                            <>
                                <PiUserCircleLight size={45} className="text-white" />
                                <div className='flex items-start justify-center flex-col'>
                                    <span className="text-sm font-medium">{user.name.firstname}</span>
                                    <span className="text-sm opacity-55 font-light">{user.email}</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to={'/auth'}>ورود / ثبت نام</Link>
                                <AiOutlineShoppingCart size={30} />
                            </>
                        )
                    }

                </div>
            </div>
            {pathname === '/' && <HomeSlider />}
        </header>
    )
}
