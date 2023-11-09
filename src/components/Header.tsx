import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import Account from './Account';

export const HeaderContainer = styled.header`
  align-items: center;

  h1 {
    font-family: 'SourceHanSerifCN';
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  h1 a span {
    background-image: linear-gradient(50deg, ${theme.colors.secondary}, ${theme.colors.primary});
    transition: ${theme.colors.secondary} 0.2s ease-out 0s, ${theme.colors.primary} 0.2s ease-in-out 0s;
    padding: 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover {
      background-image: linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.primary});
    }
  }

  h1 a {
    &:hover {
      color: ${theme.colors.primary};
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

  nav ul {
    font-size: 1.125rem;
    list-style: none;
    padding: 0 .2rem;
    li {
      padding: 1rem 0;
    }
    a {
      color: ${theme.colors.secondary};
    }
  }

  .menu-icon {
    display: none; /* 默认情况下隐藏汉堡菜单图标 */
    cursor: pointer;
  }

  @media (max-width: 850px) {
    display: flex; /* Added to make h1 and menu-icon side by side */
    justify-content: space-between; /* Added to create space between h1 and menu-icon */
    background-image: linear-gradient(50deg, ${theme.colors.secondary}, ${theme.colors.primary});

    h1 {
      padding: .8rem 2rem;
      margin: 0; /* Removed margin to prevent extra spacing */
      font-size: 1.2rem;
    }

    nav {
      ul {
        font-size: 1rem;
        li {
          padding: .7rem;
        }
        a {
          color: ${theme.colors.background};
        }
      }
    }

    h1 a span {
      background-image: none;
      background-clip: unset;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: unset;
      color: ${theme.colors.background};
      &:hover {
        text-decoration: none;
      }
    }

    .menu-icon {
      display: block; /* 在小屏幕上显示汉堡菜单图标 */
      color: ${theme.colors.background};
      position: absolute;
      right: 2rem;
    }

    nav ul {
      display: none; /* 默认情况下隐藏导航链接 */
    }

    nav.active {
      ul {
        text-align: center;
        display: flex; /* 在激活状态下显示导航链接 */
        flex-direction: column; 
        position: absolute;
        top: 2.25rem;
        left: 0;
        width: 100%;
        min-height: 5rem;
        background-image: linear-gradient(50deg, ${theme.colors.shadow}, ${theme.colors.primary});
        color: ${theme.colors.text};
        padding-bottom: .5rem;
      }
    }
  }
`;

const Header: React.FC = () => {
  const [isNavActive, setNavActive] = useState(false);

  return (
    <HeaderContainer>
      <div>
        <h1><a href="/"><span>just-plain.fun</span></a></h1>
      </div>
      <div className="menu-icon" onClick={() => setNavActive(!isNavActive)}>☰</div>
      <nav className={isNavActive ? 'active' : ''}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/friends">Friends</a></li>
          <li><a href="/rss.xml">RSS</a></li>
          <Account />
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
