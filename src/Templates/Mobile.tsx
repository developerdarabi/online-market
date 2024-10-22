import React from 'react'
import { useLocation } from 'react-router-dom'
import MobileHeader from '../components/header/Mobile'
import BottomNavigation from '../components/ui/BottomNavigation'
import useMobileStatics from '../Statics/useMobileStatics'
import MobilePageHeader from '../components/header/MobilePageHeader'

export default function MobileTemplate({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation()
    const { bottomNavigationItems } = useMobileStatics()

    const isInBottomNavigationLink = () => {
        return bottomNavigationItems().map(item => item.link).includes(pathname)
    }

    return (
        <main className='h-svh bg-gradient-to-br from-[#f1f1f1]'>
            {
                isInBottomNavigationLink() ? (
                    <MobileHeader />
                ) : (
                    <MobilePageHeader/>
                )
            }
            <div className={`${isInBottomNavigationLink() ? 'pb-16 pt-12' : 'pt-12'}`}>
                {children}
            </div>
            {isInBottomNavigationLink() && <BottomNavigation />}
        </main>
    )
}
