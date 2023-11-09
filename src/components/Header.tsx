import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import Account from './Account';


export const HeaderContainer = styled.header`
  align-items: center;

  h1 {
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  h1 a span {
    background-image: linear-gradient(45deg, ${theme.colors.secondary}, ${theme.colors.primary});
    transition: ${theme.colors.secondary} 0.2s ease-out 0s, ${theme.colors.primary} 0.2s ease-in-out 0s;
    color: ${theme.colors.background};
    padding: 0 5px;
    &:hover {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h1 a {
    &:hover {
      text-decoration: none;
    }
  }

  a {
    color: ${theme.colors.primary};
    font-weight: bold;

    &:hover {
      color: ${theme.colors.tertiary};
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
      <h1><a href="/"><span>just-plain.fun</span></a></h1>
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
