import { Link } from "react-router-dom";
import useMobileStatics from "../../Statics/useMobileStatics";

export default function BottomNavigation() {
    const { bottomNavigationItems } = useMobileStatics()

    return (
        <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                {
                    bottomNavigationItems().map((item) => (
                        <Link to={item.link} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                            {item.icon()}
                            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{item.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
