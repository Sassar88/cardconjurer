import React, {FunctionComponent, ReactNode} from "react";
import {Headline} from "View/Common";
import StyleContainer from "../CardMenu.style";
import {Menu} from "antd";
import {TCardMenuProps} from "../CardMenu";
import {useRenderMenuContent} from "Service/HookApi";



export const FramesMenu: FunctionComponent<TCardMenuProps> = (props) => {

    const menuItems = [
        { label: 'Frames', key: 'frame' }
    ];

    const renderContent = (key: string): ReactNode => {
        switch(key) {
            case 'frame' : return <div>frame</div>;
        }

        return null;
    }


    useRenderMenuContent({
        selectedKeys: props.selectedKeys || [],
        menuItems,
        renderContent
    });


    return (
        <StyleContainer>
            <Headline level={3}>Frame-Settings</Headline>
            <Menu items={ menuItems } { ...props } />
        </StyleContainer>
    )
}
