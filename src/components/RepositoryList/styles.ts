import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const RepositoryListWrapper = styled.div`
    margin-left: 100px;
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 850px) {
        flex-direction: column;

        margin-left: 0;
        margin-top: 50px;
    }
`

export const RepositoryAmount = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;

    margin-top: 0;
    margin-bottom: 32px;
`

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  @media screen and (max-width: 950px) {
        flex-direction: column;
        align-items: center;
        align-self: center;
    }

    
`

export const AmoutPerPage = styled.div`
  color: #808080;
`

export const StyledPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
  disabledClassName: 'disabled',
})`

    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    

    padding-inline-start: 0;

    li a {
      border-radius: 3px;
      padding: 2px 6px;
      cursor: pointer;
      color: #808080;
      margin: 0 10px;
    }
    li.active a {
      background-color: #0064EB;
      border-color: transparent;
      color: white;
      min-width: 32px;
    }
    li.disabled a {
      color: grey;
      border: none
    }
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db; 
  border-radius: 50%;

  width: 120px;
  height: 120px;
  margin: 20% auto;

  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
`