import React, {FunctionComponent, ReactNode, Suspense} from 'react';
import { BrowserRouter, Route, Routes }       from 'react-router-dom';
import { Loading }                            from 'View/Common';
import { Routes as RouteDefinitions }         from 'View/Router/Route/Route';


type TProps = {
  children: ReactNode
}

export const Router: FunctionComponent<TProps> = ({ children }) => {

    const renderFallBack = () => {
        return <Loading />;
    };

    return (
        <BrowserRouter>
            <Routes>
                {RouteDefinitions.map(({ path, Component }, index) => (
                    <Route path={path} key={`Route-${index}__${path}`} element={
                        <Suspense fallback={renderFallBack()}>
                            <Component />
                        </Suspense>
                    }/>
                ))}
            </Routes>
            { children }
        </BrowserRouter>
    );
};
