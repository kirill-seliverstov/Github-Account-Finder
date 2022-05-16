import React, { FC } from 'react'
import { RepositoryDescription, RepositoryName, RepositoryWrapper } from './styles';

interface RepositoryProps {
    name: string;
    description: string;
    htmlUrl: string;
}

export const Repository: FC<RepositoryProps> = ({name, description, htmlUrl}) => {
  return (
    <RepositoryWrapper>
        <RepositoryName href={htmlUrl} target="_blank" rel="noopener noreferrer">{name}</RepositoryName>
        <RepositoryDescription>{description}</RepositoryDescription>
    </RepositoryWrapper>
  )
}
