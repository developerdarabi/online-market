import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { IoMdHeart } from "react-icons/io";

export default function useMobileStatics() {
    
    const bottomNavigationItems = (): { title: string, icon: () => React.ReactNode, link: string }[] => {
        return [
            {
                title: 'Home',
                icon: () => <AiFillHome size={22} />,
                link: '/'
            },
            {
                title: 'Wish list',
                icon: () => <IoMdHeart size={22} />,
                link: '/wish-list'
            },
            {
                title: 'Cart',
                icon: () => <ImCart size={20} />,
                link: '/cart'
            },
            {
                title: 'Profile',
                icon: () => <FaUser size={20} />,
                link: '/profile'
            },
        ]
    }
    return {
        bottomNavigationItems
    }
}
