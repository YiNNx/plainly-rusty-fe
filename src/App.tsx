import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Bar from './components/Bar/Bar';
import Home from './pages/Home';
import About from './pages/About';
import { Sidebar, PageContainer, MainContent } from './containers/PageLayout';
import Friends from './pages/Friends';
import Compose from './pages/Compose';

const Post = React.lazy(() => import('./pages/Post'));

// 创建 Apollo Client 实例
const client = new ApolloClient({
  uri: 'http://localhost:8000', // 替换为你的 GraphQL 服务器地址
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
                  <Suspense fallback={<div>Loading...</div>}>
                    <Post />
                  </Suspense>
                }
              />
              <Route path="/compose" element={<Compose />} />
            </Routes>
          </MainContent>
        </PageContainer>
      </Router>
    </ApolloProvider>
  );
};

export default App;
