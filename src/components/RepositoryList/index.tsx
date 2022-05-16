import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserSelector } from '../../store/users/selectors'
import { Repo } from '../../store/users/types'
import { Repository } from '../Repository'
import { RepositoryListWrapper, RepositoryAmount, StyledPaginate, PaginationWrapper, AmoutPerPage, Loader } from './styles'
import leftArrow from '../../assets/svg/arrow-left.svg'
import rightArrow from '../../assets/svg/arrow-right.svg'

export const RepositoryList = () => {
    const user = useSelector(getUserSelector)

    const [repos, setRepos] = useState<Repo[] | null>(null);
    const [pageCount, setpageCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const perPage = 4;

    const startOfPageRange = (currentPage * perPage) - (perPage - 1);
    const endOfPageRange = Math.min(startOfPageRange + perPage - 1, user ? user?.public_repos : 100);

    useEffect(() => {
        const getRepos = async () => {
            const res = await fetch(
                `https://api.github.com/users/${user?.login}/repos?page=1&per_page=${perPage}`);
            const data = await res.json();
            setpageCount(Math.ceil(user ? user?.public_repos / perPage : 0));
            setRepos(data);
        };
        
        getRepos();
    }, [perPage]);

    const fetchRepos = async (currentPage: number) => {
        const res = await fetch(
            `https://api.github.com/users/${user?.login}/repos?page=${currentPage}&per_page=${perPage}`
        );
        const data = await res.json();

        return data;
    }

    const handlePageClick = async (data: any) => {
        const currentPage = data.selected + 1;

        const repos = await fetchRepos(currentPage);

        setCurrentPage(currentPage)

        setRepos(repos);
    };

    return (
        <RepositoryListWrapper>
            <RepositoryAmount>
                Repositories ({user?.public_repos})
            </RepositoryAmount>

            {repos?.map(repo =>
                <Repository key={repo.id} htmlUrl={repo.html_url} name={repo.name} description={repo.description} />
            )}

            <PaginationWrapper>
                <AmoutPerPage>
                    {startOfPageRange} - {endOfPageRange} of {user?.public_repos} items
                </AmoutPerPage>
                <StyledPaginate
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    previousLabel={<img src={leftArrow} />}
                    nextLabel={<img src={rightArrow} />}
                />
            </PaginationWrapper>
        </RepositoryListWrapper>
    )
}
