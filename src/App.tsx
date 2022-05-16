import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { StartSearching } from './components/StartSearching';
import { WithLoading } from './components/WithLoading';
import { GlobalStyle } from './globalStyles';
import { MainPage } from './pages/MainPage';
import { getUserLoadingSelector, getUserSelector } from './store/users/selectors';

function App() {
  const user = useSelector(getUserSelector)
  const loading = useSelector(getUserLoadingSelector)

  const MainPageWithLoading = WithLoading(<MainPage />)

  return (
    <>
      <GlobalStyle />
      <Layout>
        {user === null ?

          <StartSearching />

          :

          <MainPageWithLoading isLoading={loading} />
        }
      </Layout>
    </>
  );
}

export default App;
