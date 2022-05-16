import React, { FC } from 'react'
import { Header } from '../Header'
import { StyledWrapper } from './styles'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </>
    )
}
