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
    removeProductFromCart: ({ cartId, productId }: { cartId: number } & Pick<CartProductType, "productId">) => void;
    initializeCarts: ({ carts }: { carts: CartType[] }) => void
}

const userStore = create<UserStore>((set) => ({
    user: null,
    token: null,
    login: ({ user, token }: { user: UserType, token: string }) => set(() => ({ user, token })),
    logout: () => set(() => ({ user: null, token: null })),
    carts: [],
    //@ts-ignore
    addToCart: ({ productId, quantity }: CartProductType) => set((state: UserStore) => {

        return {
            ...state,
            carts: [
                ...state.carts,
                {
                    products: [
                        {
                            productId,
                            quantity
                        }
                    ],
                    date: new Date(),
                    id: Math.random(),
                    userId: 1
                }
            ]
        }
    }),
    changeProductQuantity: ({ cartId, productId, quantity }: { cartId: number } & CartProductType) => set((state: UserStore) => {
        const cartIndex = state.carts.findIndex(cart => cart.id === cartId);
        if (cartIndex === -1) return state; // Cart not found

        const cart = state.carts[cartIndex];
        const productIndex = cart.products.findIndex(product => product.productId === productId);

        if (productIndex > -1) {
            if (quantity <= 0) {
                // If quantity is zero or less, remove the product from the cart
                return {
                    carts: [
                        ...state.carts.slice(0, cartIndex),
                        {
                            ...cart,
                            products: cart.products.filter(product => product.productId !== productId),
                        },
                        ...state.carts.slice(cartIndex + 1),
                    ],
                };
            } else {
                // Product found, update the quantity
                const updatedProducts = [...cart.products];
                updatedProducts[productIndex] = {
                    ...updatedProducts[productIndex],
                    quantity
                }

                return {
                    carts: [
                        ...state.carts.slice(0, cartIndex),
                        { ...cart, products: updatedProducts },
                        ...state.carts.slice(cartIndex + 1),
                    ],
                };
            }
        }

        return state; // No changes made if product not found
    }),
    removeProductFromCart: ({ cartId, productId }: { cartId: number, productId: number }) => set((state) => {
        const cartIndex = state.carts.findIndex(cart => cart.id === cartId);
        if (cartIndex === -1) return state; // Cart not found

        const cart = state.carts[cartIndex];
        const updatedProducts = cart.products.filter(product => product.productId !== productId);

        return {
            carts: [
                ...state.carts.slice(0, cartIndex),
                { ...cart, products: updatedProducts },
                ...state.carts.slice(cartIndex + 1),
            ],
        };
    }),
    initializeCarts: ({ carts }: { carts: CartType[] }) => set((state: UserStore) => ({ ...state, carts: carts })),
}))

export default userStore