import React, {FunctionComponent, ReactNode} from "react";
import {Headline} from "View/Common";
import StyleContainer from "../CardMenu.style";
import {Menu} from "antd";
import {TCardMenuProps} from "../CardMenu";
import {useRenderMenuContent} from "Service/HookApi";


export const TextsMenu: FunctionComponent<TCardMenuProps> = (props) => {

    const menuItems = [
        { label: 'Mana-Coast', key: 'mana' },
        { label: 'Title', key: 'title' },
        { label: 'Type', key: 'type' },
        { label: 'Rule Text', key: 'ruleText' },
        { label: 'Power Toughness', key: 'powerToughness' },
    ];

    const renderContent = (key: string): ReactNode => {
        switch(key) {
            case 'mana'           : return <div>Mana</div>;
            case 'title'          : return <div>title</div>;
            case 'type'           : return <div>type</div>;
            case 'ruleText'       : return <div>ruleText</div>;
            case 'powerToughness' : return <div>powerToughness</div>;
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
            <Headline level={3}>Text-Settings</Headline>
            <Menu items={ menuItems } { ...props } />
        </StyleContainer>
    )
}
