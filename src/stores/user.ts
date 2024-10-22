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
    addToCart: ({ productId, quantity }: CartProductType) => set((state: UserStore) => ({ ...state, carts: { ...state.carts, products: [...state.carts.products, { productId, quantity }] } })),
    initializeCarts: ({ carts }: { carts: CartType[] }) => set((state: UserStore) => ({ ...state, carts: carts })),
}))

export default userStore