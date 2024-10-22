import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "react-router-dom";
import BurgerMenu from "../ui/BurgerMenu";
import Logo from "../ui/Logo";

export default function MobileHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 right-0 z-50 w-full h-12 bg-[#05678E] flex items-center justify-between px-2">
                <nav>
                    <section className="flex z-[100] text-white">
                        <TbMenuDeep onClick={() => setIsNavOpen((prev) => !prev)} size={25} />
                    </section>
                </nav>
                <Logo size={25} />
            </header>
            <BurgerMenu isOpen={isNavOpen} onClose={() => setIsNavOpen(false)}>
                <div className="flex flex-col items-start gap-6 my-8">
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/'}>Home</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/products'}>Products</Link>
                    <Link className="text-md font-medium hover:text-hover duration-100" to={'/roles'}>Roles</Link>
                </div>
            </BurgerMenu>
        </>
    )
}
