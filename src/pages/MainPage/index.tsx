import React from 'react'
import { useSelector } from 'react-redux'
import { UserNotFound } from '../../components/UserNotFound'
import { RepositoryList } from '../../components/RepositoryList'
import { UserProfile } from '../../components/UserProfile'
import { getUserErrorSelector, getUserSelector } from '../../store/users/selectors'
import { MainPageWrapper } from './styles'
import { ReposNotFound } from '../../components/ReposNotFound'
import { WithLoading } from '../../components/WithLoading'

export const MainPage = () => {
  const userError = useSelector(getUserErrorSelector)
  const user = useSelector(getUserSelector)

  if (userError) {
    return <UserNotFound />
  } else {
    return (
      <MainPageWrapper>
        <UserProfile />
        
        {
          user !== null && user.public_repos >= 1 ?
            <RepositoryList />

            :

            <ReposNotFound />
        }

      </MainPageWrapper >
    )
  }
}
