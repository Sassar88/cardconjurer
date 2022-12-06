import React, { FunctionComponent } from 'react';
import Style from './Loading.style';

export const Loading: FunctionComponent = () => {

    return (
        <Style>
            <div className="loadingIndicator">
                <div></div>
                <div></div>
            </div>
            <div className="loadingMessage">Wird geladen ...</div>
        </Style>
    )

}