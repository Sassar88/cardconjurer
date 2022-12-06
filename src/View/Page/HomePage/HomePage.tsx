import React, {FunctionComponent} from 'react';
import Style from "./HomePage.style";
import { CardPreview } from "View/Component";
import {
    CardMenuContainer,
    CardMenuProvider
} from "View/Container";

export const HomePage: FunctionComponent = () => {

    return (
        <CardMenuProvider>
            <Style>
              <CardPreview />
              <CardMenuContainer />
            </Style>
        </CardMenuProvider>
    );
};

export default HomePage;
