import { useEffect } from "react";

export default function useDivOutsideHandler({ ref, handler }: { ref: React.RefObject<any>, handler: () => void }) {
    useEffect(() => {
        function handleClickOutside(event: TouchEvent | MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
