import { create } from 'zustand';
import { UserType } from '../types/auth';
import { CartProductType, CartType } from '../types/cart';

interface UserStore {
    user: UserType | null;
    carts: CartType[],
    token: string | null;
    login: ({ user, token }: { user: UserType, token: string }) => void;
    logout: () => void;
    addToCart: ({ productId, quantity }: CartProductType) => void;
    changeProductQuantity: ({ cartId, productId, quantity }: { cartId: number } & CartProductType) => void;
    initializeCarts: ({ carts }: { carts: CartType[] }) => void
}

const userStore = create<UserStore>((set) => ({
    user: null,
    token: null,
    login: ({ user, token }: { user: UserType, token: string }) => set(() => ({ user, token })),
    logout: () => set(() => ({ user: null, token: null })),
    carts: [
        {
            id: null,
            date: null,
            products: [],
            userId: null
        }
    ],
    //@ts-ignore
    addToCart: ({ productId, quantity }: CartProductType) => set((state: UserStore) => {

        return {
            ...state,
            carts:[
                ...state.carts,
                {
                    products:[
                        {
                            productId,
                            quantity
                        }
                    ],
                    date:new Date(),
                    id:Math.random(),
                    userId:1
                }
            ]
        }
    }),
    changeProductQuantity: ({ cartId, productId, quantity }: { cartId: number } & CartProductType) => set((state: UserStore) => {
        const duplicatedCarts = [...state.carts]

        const foundedCartIndex = duplicatedCarts.findIndex((cart: CartType) => cart.id === cartId)

        duplicatedCarts[foundedCartIndex].products.map((product: CartProductType) => {
            if (product.productId === productId) {
                return { ...product, quantity }
            }
            return product
        })

        return {
            ...state,
            carts: duplicatedCarts
        }
    }),
    initializeCarts: ({ carts }: { carts: CartType[] }) => set((state: UserStore) => ({ ...state, carts: carts })),
}))

export default userStore