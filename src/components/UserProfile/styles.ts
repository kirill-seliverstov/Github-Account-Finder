import styled from "styled-components";

export const UserProfileWrapper = styled.div`
    max-width: 300px;
    margin-top: 10px;

    @media screen and (max-width: 850px) {
        align-self: center;
    }
`

export const UserAvatar = styled.img`
    max-width: 280px;
    border-radius: 50%;
`

export const UserName = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 130%;
    margin-top: 29px;
    margin-bottom: 12px;

    color: #000000;
`

export const UserLogin = styled.a`
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #0064EB;
`

export const UserFollowList = styled.div`
    margin-top: 25px;

    display: flex;
    justify-content: space-between;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    color: #000000;
`

export const UserFollowers = styled.div`
    display: flex;
    max-height: 24px;
    align-items: center;
`

export const UserFollowersIcon = styled.img`
    margin-right: 8px;
`

export const UserFollowing = styled.div`
    display: flex;
    max-height: 24px;
    align-items: center;
`

