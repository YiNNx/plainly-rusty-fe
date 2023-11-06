import React from 'react';
import styled from 'styled-components';

// 创建一个包含样式的Header组件
const HeaderContainer = styled.header`
  /* background-color: #ffffff; */
  color: #656565;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
  }



  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;

  }
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <h1><a href="/">My Blog</a></h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
