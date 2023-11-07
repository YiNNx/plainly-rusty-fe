import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

// 创建一个包含样式的Header组件
const HeaderContainer = styled.header`
  /* background-color: ${theme.colors.background}; */
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;

  h1 {
    font-size: 24px;
    padding: 2rem 0;
  }

  a {
    color: ${theme.colors.primary};
    font-weight: bold;
    
    &:hover {
    text-decoration: underline 1px;
    text-underline-offset: .4rem;
  }
  }

  nav ul {
    list-style: none;
    padding: 0;
    /* display: flex; */
    /* gap: 20px; */
    li{
      padding: 1rem 0;
    }
    a {
      color: ${theme.colors.secondary};
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1><a href="/">just-plain.fun</a></h1>

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
