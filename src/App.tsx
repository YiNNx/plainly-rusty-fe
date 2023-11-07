import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post'; // 新建一个Post页面
import { Sidebar, PageContainer, MainContent } from './containers/PageLayout';

const App: React.FC = () => {
  return (
    <Router>
      <PageContainer>

        <Sidebar>
          <Header />
        </Sidebar>

        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} /> {/* 使用参数: id */}
          </Routes>
        </MainContent>

      </PageContainer>
    </Router>
  );
};

export default App;
