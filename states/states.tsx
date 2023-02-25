import { atom } from 'recoil';

export const prefixState = atom<string>({
    key : 'prefixState',
    default : process.env.NODE_ENV === "production"
        ? `https://hangeol-chang.github.io/factory-typescript` 
        : "", 
})