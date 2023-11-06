import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post'; // 新建一个Post页面
import PageLayout from './containers/PageLayout';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} /> {/* 使用参数: id */}
          </Routes>
        </PageLayout>
      </div>
    </Router>
  );
};

export default App;
