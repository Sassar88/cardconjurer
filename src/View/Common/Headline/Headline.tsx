import React, {FunctionComponent} from "react";
import Style from "./Headline.style";

export interface IHeadlineProps {
    level?: 1 | 2 | 3 | 4 | 5,
    className?: string,
    children?: React.ReactNode,
}


export const Headline: FunctionComponent<IHeadlineProps> = ({level, className, children}) => {
    return (
        <Style level={level} className={className}> {children} </Style>

    );
};
