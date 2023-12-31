import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Bar from './components/Bar/Bar';
import Home from './pages/Home';
import About from './pages/About';
import { Sidebar, PageContainer, MainContent } from './containers/PageLayout';
import Friends from './pages/Friends';
import Compose from './pages/Compose';
import Oauth from './pages/Oauth';

const Post = React.lazy(() => import('./pages/Post'));

const client = new ApolloClient({
  uri: 'https://just-plain.fun/api/',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <PageContainer>
          <Sidebar>
            <Bar />
          </Sidebar>

          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/friends" element={<Friends />} />
              <Route
                path="/post/:id"
                element={
                  <Suspense fallback={<br />}>
                    <Post />
                  </Suspense>
                }
              />
              <Route path="/compose" element={<Compose />} />
              <Route path="/oauth" element={<Oauth />} />
            </Routes>
          </MainContent>
        </PageContainer>
      </Router>
    </ApolloProvider>
  );
};

export default App;
