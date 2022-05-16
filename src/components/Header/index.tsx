import React, { useState } from 'react'
import { InputLogo, InputWrapper, StyledHeader, StyledInput, StyledLogo } from './styles'
import ghIcon from '../../assets/svg/gh-icon.svg'
import inputIcon from '../../assets/svg/input-search-icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getUserSelector } from '../../store/users/selectors';
import { fetchUser } from '../../store/users/actions';

export const Header = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState<string>('')

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(fetchUser({ user: username }))
        }
    }

    return (
        <StyledHeader>
            <StyledLogo src={ghIcon} alt="GitHub" />
            <InputWrapper>
                <StyledInput type="text" value={username} placeholder='Enter GitHub username' onChange={e => setUsername(e.target.value)} onKeyDown={handleKeyDown} />
                <InputLogo src={inputIcon}/>
            </InputWrapper>
        </StyledHeader>
    )
}
