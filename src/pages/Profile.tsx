import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { MaxWidth } from "../components/ui";
import UserAvatar from "../components/ui/UserAvatar";
import userStore from "../stores/user";

export default function ProfilePage() {
    const { user, logout } = userStore()
    const navigate = useNavigate()
    
    const cookies = new Cookies()

    const logoutHandler = () => {
        cookies.remove('token')
        logout()
        navigate('/')
    }


    return (
        <MaxWidth className="md:py-20 py-4">
            <div className="flex items-center px-2 justify-between mb-20">
                <h1 className="md:text-3xl text-md font-bold  m-auto:">{`Welcome ${user?.name.firstname} ${user?.name.lastname}`}</h1>
                <button onClick={logoutHandler} className="bg-red-100 flex items-center justify-center md:px-4 px-2 md:py-2 py-1 rounded-md text-red-600 gap-2">
                    <span>Logout</span>
                    <TbLogout className="md:w-[40px] w-[20px] md:h-[40px] h-[20px]"/>
                </button>
            </div>
            <div className="flex items-center justify-start md:flex-row flex-col gap-10 xl:px-20">
                <UserAvatar className="rounded-full md:w-[300px] md:h-[300px] w-[200px] h-[200px]" />
                <div className="flex flex-col justify-start gap-7">
                    <div className="flex ">
                        <span className="text-xl font-bold">Address : </span>
                        <span className="text-md font-medium mx-2">{user?.address.city} - {user?.address.street} - {user?.address.number}</span>
                    </div>
                    <div className="flex ">
                        <span className="text-xl font-bold">Email : </span>
                        <span className="text-md font-medium mx-2">{user?.email}</span>
                    </div>
                    <div className="flex ">
                        <span className="text-xl font-bold">Phone : </span>
                        <span className="text-md font-medium mx-2">{user?.phone}</span>
                    </div>
                </div>
            </div>
        </MaxWidth>
    )
}
