import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { AiFillProduct } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export default function useMobileStatics() {
    const {pathname} = useLocation()
    
    const bottomNavigationItems = (): { title: string, icon: () => React.ReactNode, link: string }[] => {
        return [
            {
                title: 'Home',
                icon: () => <AiFillHome className={`${pathname!=='/'?'text-slate-600':'text-primary'}`} size={30} />,
                link: '/'
            },
            {
                title: 'Products',
                icon: () => <AiFillProduct className={`${pathname!=='/products'?'text-slate-600':'text-primary'}`} size={30} />,
                link: '/products'
            },
            {
                title: 'Cart',
                icon: () => <ImCart className={`${pathname!=='/cart'?'text-slate-600':'text-primary'}`} size={28} />,
                link: '/cart'
            },
            {
                title: 'Profile',
                icon: () => <FaUser className={`${pathname!=='/profile'?'text-slate-600':'text-primary'}`} size={28} />,
                link: '/profile'
            },
        ]
    }
    return {
        bottomNavigationItems
    }
}
