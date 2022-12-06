import {ReactNode, useContext, useEffect} from 'react';
import {CardMenuContext} from "View/Container";

type TRenderMenuContent = {
    selectedKeys: string[],
    menuItems: { label: string, key: string }[],
    renderContent: (key: string) => ReactNode,
}

export const useRenderMenuContent = ({ selectedKeys, menuItems, renderContent }: TRenderMenuContent) => {

    const menuContext = useContext(CardMenuContext);

    useEffect(() => {
        if(!!selectedKeys.length && menuItems.some((item) => item.key === selectedKeys[0] )) {
            menuContext.setContent(renderContent(selectedKeys[0]));
        }
        if(!selectedKeys.length) {
            menuContext.setContent(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ selectedKeys ])

}
