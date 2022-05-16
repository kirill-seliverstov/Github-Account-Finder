import React from 'react'
import { ReposNotFoundIcon, ReposNotFoundWrapper, StyledParagraph } from './styles'
import reposNotFoundIcon from '../../assets/svg/repos-notfound-icon.svg'


export const ReposNotFound = () => {
    return (
        <ReposNotFoundWrapper>
            <ReposNotFoundIcon src={reposNotFoundIcon} />
            <StyledParagraph>
                Repository list is empty
            </StyledParagraph>
        </ReposNotFoundWrapper>
    )
}
