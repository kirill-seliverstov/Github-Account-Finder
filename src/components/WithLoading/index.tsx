import React, { FC, ReactNode } from 'react'
import { Loader } from './styles';

export const WithLoading = (Component: JSX.Element) => {
    return function WihLoadingComponent({ isLoading = true }) {
        if (!isLoading) return Component
        return <Loader />;
    }
}
