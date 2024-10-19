import { PiUserCircleLight } from 'react-icons/pi';
import { Link, useLocation } from "react-router-dom";
import HomeSlider from '../ui/HomeSlider';
import Logo from "../ui/Logo";

export default function DesktopHeader() {
    const { pathname } = useLocation()

    return (
        <header className={`${pathname === '/' && 'relative h-[700px] shadow-lg'}`}>
            <div className='sticky top-0  bg-secondary  w-full z-[100] mb-4 p-3 rounded-bl-2xl px-20 rounded-br-2xl shadow flex items-center justify-between'>
                <div><span className="text-xl font-bold text-indigo-500 font-serif"><Logo /></span></div>
                <div className="flex items-center gap-6">
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/'}>صفحه اصلی</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/products'}>محصولات</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/roles'}>قوانین</Link>
                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <PiUserCircleLight size={60} className="text-icons" />
                    <div className='flex items-start justify-center flex-col'>
                        <span className="text-sm font-medium">کاربر</span>
                        <span className="text-sm opacity-55 font-light">example@gmail.com</span>
                    </div>
                </div>
            </div>
            {pathname === '/' && <div className='absolute w-full left-0 top-0  bg-background h-full' ><HomeSlider /></div>}
        </header>
    )
}
