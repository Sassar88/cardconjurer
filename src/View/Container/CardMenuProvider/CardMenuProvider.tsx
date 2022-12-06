import React, {
    createContext,
    FunctionComponent,
    ReactNode, useState,
} from "react";

export type TCardMenuContext = {
    content: ReactNode,
    activeMenu: string|null,
    activeSubMenu: string|null,
    setContent: (content: ReactNode) => void,
}

export const CardMenuContext = createContext<TCardMenuContext>({
    content: null,
    activeMenu: null,
    activeSubMenu: null,
    setContent: () => {}
});

type TProps = {
    children: ReactNode,
}

export const CardMenuProvider: FunctionComponent<TProps> = ({ children }) => {

    const [ content, setContent ] = useState<ReactNode>(null);

    return (
        <CardMenuContext.Provider
            value={{
                content,
                setContent,
                activeMenu: null,
                activeSubMenu: null,
            }}
        >
            { children }
        </CardMenuContext.Provider>
    );


}
