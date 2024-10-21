import { useState } from "react";
import Logo from "../ui/Logo";
import { TbMenuDeep } from "react-icons/tb";
import { GrClose } from "react-icons/gr";

export default function MobileHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 z-50 w-full h-12 bg-[#05678E] flex items-center justify-between px-2">
            <Logo size={25} />
            <nav>
                <section className="flex z-[100] text-white">
                    <TbMenuDeep onClick={() => setIsNavOpen((prev) => !prev)} size={25}/>
                    <div className={`${isNavOpen ? " absolute top-0 right-0 h-svh w-2/3 bg-white border flex-col justify-start" : "w-0 overflow-hidden "} duration-500`}>
                        <GrClose size={25} color="#000" onClick={() => setIsNavOpen(false)} className="ms-auto"/>
                        dfdf
                    </div>
                </section>
            </nav>
        </header>
    )
}
