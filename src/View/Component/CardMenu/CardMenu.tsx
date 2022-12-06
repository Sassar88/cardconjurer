import React, {FunctionComponent, useMemo, useState} from "react";
import {FramesMenu} from "./Menus/FramesMenu";
import {TextsMenu} from "./Menus/TextsMenu";
import {useSubject} from "Service/HookApi";
import StyleContainer from "./CardMenu.style";
import { MenuClickEventHandler } from "rc-menu/lib/interface";


interface IProps {
    activeMenuPoint: 'frames' | 'texts' | string | null
}

export type TCardMenuProps = {
    onClick?: MenuClickEventHandler
    selectedKeys?: string[]
}

export const CardMenu: FunctionComponent<IProps> = ({activeMenuPoint}) => {
    let MenuComponent = null;

    const [activeMenuItem, setActiveMenuItem] = useState<string[]>([]);

    const handleOnClick$ = useSubject<Partial<{ key: string }>>(({key}) => {
        let currentKeys: string[] = [];

        if (!activeMenuItem.includes(key!)) {
            currentKeys = [ key! ];
        }
        setActiveMenuItem(currentKeys);
    });

    const menuProps = useMemo(() => ({
        selectedKeys: activeMenuItem,
        onClick: (props: any) => { handleOnClick$.next(props) },
    }), [activeMenuItem, handleOnClick$])

    switch (activeMenuPoint) {
        case 'frames' : MenuComponent = <FramesMenu { ...menuProps } />; break;
        case 'texts'  : MenuComponent = <TextsMenu { ...menuProps } />; break;
    }

    return (
        <StyleContainer>
            { MenuComponent }
        </StyleContainer>
    )
}
