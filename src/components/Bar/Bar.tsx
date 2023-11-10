import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import Account from '../Account/Account';
import { ReactComponent as SvgMemu } from '../../assets/svg/memu.svg';

const BarContainer = styled.header`
    align-items: center;

    a {
        font-weight: bold;
        &:hover {
            color: ${theme.colors.tertiary};
            text-decoration: underline 1px;
            text-underline-offset: .4rem;
        }
    }

    @media (max-width: 850px) {
        display: flex; /* Added to make h1 and menu-icon side by side */
        justify-content: space-between; /* Added to create space between h1 and menu-icon */
        background-image: linear-gradient(50deg, ${theme.colors.secondary}, ${theme.colors.primary});

        a {
            &:hover {
                color: ${theme.colors.background};
            }
        }

        nav.active {
            ul {
                text-align: center;
                display: flex;
                flex-direction: column; 
                position: absolute;
                top: 2.5rem;
                left: 0;
                width: 100%;
                min-height: 5rem;
                background-image: linear-gradient(45deg, ${theme.colors.shadow}, ${theme.colors.primary});
                color: ${theme.colors.text};
                padding: .5rem;
                box-shadow: 0px 5px 5px ${theme.colors.shadow};
            }
        }
    }
`;

const BarList = styled.ul`
    font-size: 1.125rem;
    list-style: none;
    padding: 0 .2rem;
    li {
        padding: 1rem 0;
    }
    a {
        color: ${theme.colors.secondary};
    }

    @media (max-width: 850px){
        display: none;
        font-size: 1rem;
        li {
            padding: .7rem;
        }
        a {
            color: ${theme.colors.background};
        }
    }
`;

const Header = styled.h1`
    font-family: 'SourceHanSerifCN';
    font-size: 1.5rem;
    padding: 2rem 0;

    a {
        &:hover {
            color: ${theme.colors.primary};
        }
    }

    @media (max-width: 850px) {
        padding: 1rem 2rem;
        margin: 0;
        font-size: 1.2rem;
    }
`;

const HeaderSpan = styled.span`
    background-image: linear-gradient(50deg, ${theme.colors.secondary}, ${theme.colors.primary});
    transition: ${theme.colors.secondary} 0.2s ease-out 0s, ${theme.colors.primary} 0.2s ease-in-out 0s;
    padding: 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover {
        background-image: linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.primary});
    }

    @media (max-width: 850px) {
        background-image: none;
        background-clip: unset;
        -webkit-background-clip: unset;
        -webkit-text-fill-color: unset;
        color: ${theme.colors.background};

        &:hover {
            background-image: none;
        }
    }
`;

const Menu = styled.div`
    display: none; 
    cursor: pointer;

    @media (max-width: 850px) {
        display: block; 
        
        color: ${theme.colors.background};
        position: absolute;
        right: 1.5rem;
        
        svg {
            height: 1rem;
            width: 1rem;
            padding: .5rem  .5rem .2rem .5rem;
            fill: ${theme.colors.block};
        }
    }
`;

const Bar: React.FC = () => {
    const [isNavActive, setNavActive] = useState(false);

    return (
        <BarContainer>
            <div>
                <Header><a href="/"><HeaderSpan>just-plain.fun</HeaderSpan></a></Header>
            </div>
            <Menu onClick={() => setNavActive(!isNavActive)}>
                <SvgMemu />
            </Menu>
            <nav className={isNavActive ? 'active' : ''}>
                <BarList>
                    <li><a href="/about">About</a></li>
                    <li><a href="/friends">Friends</a></li>
                    <li><a href="/rss.xml">RSS</a></li>
                    <Account />
                </BarList>
            </nav>
        </BarContainer>
    );
};

export default Bar;
