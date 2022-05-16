import React from 'react'
import { useSelector } from 'react-redux'
import { getUserSelector } from '../../store/users/selectors'
import { UserAvatar, UserFollowers, UserFollowersIcon, UserFollowing, UserFollowList, UserLogin, UserName, UserProfileWrapper } from './styles'
import followersIcon from '../../assets/svg/followers-icon.svg'
import followingIcon from '../../assets/svg/following-icon.svg'


export const UserProfile = () => {
    const user = useSelector(getUserSelector)

    return (
        <UserProfileWrapper>
            <UserAvatar src={user?.avatar_url} />
            <UserName>{user?.name}</UserName>
            <UserLogin href={user?.html_url} target="_blank" rel="noopener noreferrer">{user?.login}</UserLogin>
            <UserFollowList>
                <UserFollowers>
                    <UserFollowersIcon src={followersIcon} />
                    {user?.followers} followers
                </UserFollowers>
                <UserFollowing>
                    <UserFollowersIcon src={followingIcon} />
                    {user?.following} following
                </UserFollowing>
            </UserFollowList>
        </UserProfileWrapper>
    )
}
