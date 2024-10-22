import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import useOutsideAlerter from "../../hooks/useDivOutsideHandler";

export default function BurgerMenu({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) {
    const menuRef = useRef(null)
    useOutsideAlerter({
        ref: menuRef, handler: () => {
            onClose()
        }
    })

    return (
        <>
            <div ref={menuRef} className={`${isOpen ? "  w-2/3 bg-white border flex-col justify-start" : "w-0 opacity-0  overflow-hidden "} h-svh  absolute z-[100] top-0 left-0  duration-500`}>
                <div className="p-4 ">
                    <GrClose size={20} color="#000" onClick={() => onClose()} className="me-auto" />
                    {children}
                </div>
            </div>
            <div className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden'} duration-500 absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50 z-[99]`} />
        </>
    )
}
