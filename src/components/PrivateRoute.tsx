import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
    Component: ComponentType;
};

export const PrivateRoute = ({ Component }: PrivateRouteProps) => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/notauthenticated" replace />;
    }
    return <Component />;
}