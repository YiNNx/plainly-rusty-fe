import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import Account from './Account';


const HeaderContainer = styled.header`
  align-items: center;

  h1 {
    font-size: 1.5rem;
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

  nav ul{
    list-style: none;
    padding: 0;
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
          <li><a href="/about">About</a></li>
          <li><a href="/friends">Friends</a></li>
          <li><a href="/rss.xml">RSS</a></li>
          <li><a href="/compose">Compose</a></li>
        </ul>
        <Account />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
