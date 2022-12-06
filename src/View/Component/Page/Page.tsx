import React, {FunctionComponent, ReactNode} from 'react';
import Style                        from './Page.style';

interface IProps {
    className?: string,
    children?: ReactNode
}

export const Page: FunctionComponent<IProps> = ({ className, children }) => {

    return (
        <Style className={ className }>
            { children }
        </Style>
    );

}
