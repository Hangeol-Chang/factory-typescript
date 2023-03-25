import { atom } from 'recoil';

const prefixState = atom<string>({
    key : 'prefixState',
    default : process.env.NODE_ENV === "production"
        ? `https://hangeol-chang.github.io/factory-typescript` 
        : "", 
})

const relativePrefixState = atom<string>({
    key : 'relativePrefixState',
    default : process.env.NODE_ENV === "production"
        ? `/factory-typescript`
        : `/`,
})

export {
    prefixState,
    relativePrefixState,
};