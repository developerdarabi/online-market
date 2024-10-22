import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useLazyUserInfoQuery } from "../api/auth";
import { useLazyCartsQuery } from "../api/cart";
import userStore from "../stores/user";
import { CartType } from "../types/cart";

const CheckUserInfo = ({ children }: { children: React.ReactNode }) => {
    const cookies = new Cookies();
    const [userInfoApi] = useLazyUserInfoQuery()
    const [cartsApi] = useLazyCartsQuery()
    const { user, login ,initializeCarts} = userStore()
    
    const getUserInfo = async () => {
        await userInfoApi().unwrap().then(async (info) => {
            //@ts-ignore
            await cartsApi({ userId: info.id }).unwrap().then((carts: CartType[]) => {
                cookies.set('token', cookies.get('token'))
                initializeCarts({carts})
                login({ user: info, token: cookies.get('token') })
            })
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
