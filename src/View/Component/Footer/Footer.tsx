import React, { FunctionComponent } from 'react';
import Style                        from './Footer.style';

export const Footer: FunctionComponent = () => {

    const now = new Date();

    return (
        <Style>
            Cardconjurer © {now.getFullYear()}
            <div className="version">v{process.env.REACT_APP_VERSION}</div>
        </Style>
    );

};
