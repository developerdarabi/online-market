import { create } from 'zustand';
import { UserType } from '../types/auth';

interface UserStore {
    user: UserType | null;
    token: string | null;
    login: ({ user, token }: { user: UserType, token: string }) => void;
}

const userStore = create<UserStore>((set) => ({
    user: null,
    token: null,
    login: ({ user, token }: { user: UserType, token: string }) => set(() => ({ user, token })),
}))

export default userStore