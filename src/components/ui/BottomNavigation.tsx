import { Link, useLocation } from "react-router-dom";
import useMobileStatics from "../../Statics/useMobileStatics";

export default function BottomNavigation() {
    const { bottomNavigationItems } = useMobileStatics()
    const { pathname } = useLocation()
    return (
        <div className="fixed bottom-0 left-0 w-full h-14 bg-white grid grid-cols-4 mx-auto ">
            <style>
                {keyframes}
            </style>
            {
                bottomNavigationItems().map((item, index) => (
                    <div key={index} style={pathname === item.link ? {...upAnimation} : { ...downAnimation }} className={`flex flex-col items-center gap-1 justify-center     w-[60px] h-[60px] rounded-full m-auto p-2 bg-white duration-1000`}>
                        <Link to={item.link}  className={`${pathname === item.link ? 'bg-primary text-white' : 'text-gray-400'} rounded-full w-full h-full flex items-center justify-center`}>
                            {item.icon()}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}



const upAnimation = {
    animation: 'up .1s ease-in-out forwards',
}; 

const downAnimation = {
    animation: 'down .1s ease-in-out forwards',
};

const keyframes = `
    @keyframes up {
      0% {
        margin-top: 0;
      }
      100% {
        margin-top: -24px;
      }
    };
     @keyframes down {
      0% {
        margin-top: -24px;
      }
      100% {
        margin-top: 0;
      }
    },
  `;