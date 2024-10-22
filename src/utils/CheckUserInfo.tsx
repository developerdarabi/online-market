import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useLazyUserInfoQuery } from "../api/auth";
import userStore from "../stores/user";

const CheckUserInfo = ({ children }: { children: React.ReactNode }) => {
    const cookies = new Cookies();
    const [userInfoApi] = useLazyUserInfoQuery()
    const { user, login } = userStore()

    const getUserInfo = async () => {
        await userInfoApi().unwrap().then((info) => {
            cookies.set('token', cookies.get('token'))
            login({ user: info, token: cookies.get('token') })
        })
    }

    useEffect(() => {
        if (!user && cookies.get('token')) {
            getUserInfo()
        }
    }, [])


    return children;
};

export default CheckUserInfo
