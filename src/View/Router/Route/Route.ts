import { lazy }   from "react";

// ToDo any -> ConstructorParameters<typeof URLSearchParams>[0] but specific object are not mapping to the constructorParameters
// const buildQueryString = (query?: any) =>  query ? `?${new URLSearchParams(query).toString()}` : '';

export const RouteBuilder = {
    buildHomePath:  () => `/`,
}

export const Routes = [
    {
        path: RouteBuilder.buildHomePath(),
        Component: lazy(() => import('View/Page/HomePage/HomePage'))
    },
];
