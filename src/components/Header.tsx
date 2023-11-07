import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import SvgAccount from '../assets/account.svg'

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

const Account = styled.div`
  position: fixed;
  bottom: 5rem;

  img {
      vertical-align: middle;
      width: 1.75rem;
      /* border: 1px solid ${theme.colors.secondary}; */
      /* border-radius: 3rem; */
    }

  span {
    font-weight: normal;
    padding: .5rem;
    color: ${theme.colors.primary};
    text-decoration: underline 1px;
    text-underline-offset: .4rem;
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
          <li><a href="/friends">Friends</a></li>
        </ul>
        <a href="/login">
          <Account>
            <img src={SvgAccount} alt="Account" />
            <span>Log in</span>
          </Account>
        </a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
