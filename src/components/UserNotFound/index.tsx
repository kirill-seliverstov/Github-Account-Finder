import React from 'react'
import notFoundIcon from '../../assets/svg/notfound-icon.svg'
import { StyledParagraph } from '../StartSearching/styles'
import { UserNotFoundIcon, UserNotFoundWrapper } from './styles'

export const UserNotFound = () => {
  return (
    <UserNotFoundWrapper>
            <UserNotFoundIcon src={notFoundIcon} />
            <StyledParagraph>
                User not found
            </StyledParagraph>
        </UserNotFoundWrapper>
  )
}
