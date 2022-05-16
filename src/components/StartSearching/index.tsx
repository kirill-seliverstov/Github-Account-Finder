import React from 'react'
import { SearchIcon, StartSearchingWrapper, StyledParagraph } from './styles'
import searchIcon from '../../assets/svg/search-icon.svg'

export const StartSearching = () => {
    return (
        <StartSearchingWrapper>
            <SearchIcon src={searchIcon} />
            <StyledParagraph>
                Start with searching <span>a GitHub user</span>
            </StyledParagraph>
        </StartSearchingWrapper>
    )
}
