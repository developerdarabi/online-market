import { Link, useLocation } from "react-router-dom";
import useMobileStatics from "../../Statics/useMobileStatics";

export default function BottomNavigation() {
    const { bottomNavigationItems } = useMobileStatics()
    const { pathname } = useLocation()
    return (
        <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                {
                    bottomNavigationItems().map((item) => (
                        <Link to={item.link} className="inline-flex flex-col items-center gap-1 justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            {item.icon()}
                            <span className={`text-sm ${pathname !== item.link ? 'text-slate-600' : 'text-primary'}`}>{item.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
