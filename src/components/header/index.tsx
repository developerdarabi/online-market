import { PiUserCircleLight } from 'react-icons/pi';
import { Link, useLocation } from "react-router-dom";
import HomeSlider from '../ui/HomeSlider';
import Logo from "../ui/Logo";

export default function DesktopHeader() {
    const { pathname } = useLocation()

    return (
        <header className={`${pathname === '/' && ''} relative`}>
            <div className=' w-full z-[100] mb-4 bg-[#05678E] text-white p-2 px-20 flex items-center justify-between'>
                <div><span className="text-xl font-bold text-indigo-500 font-serif"><Logo /></span></div>
                <div className="flex items-center gap-6">
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/'}>Home</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/products'}>Products</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/roles'}>Roles</Link>
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <PiUserCircleLight size={60} className="text-white" />
                    <div className='flex items-start justify-center flex-col'>
                        <span className="text-sm font-medium">User</span>
                        <span className="text-sm opacity-55 font-light">example@gmail.com</span>
                    </div>
                </div>
            </div>
            {pathname === '/' && <HomeSlider />}
        </header>
    )
}
