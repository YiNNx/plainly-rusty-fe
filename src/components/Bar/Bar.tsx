import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import Account from '../Account/Account';
import { ReactComponent as SvgMemu } from '../../assets/svg/memu.svg';
import { SuccessMessage } from '../Util/Message';

const BarContainer = styled.header`
    z-index: 1000;
    align-items: center;
    right: 0;
    left: 0;

    a {
        font-weight: bold;
        color: ${theme.colors.secondary};
        &:hover {
            color: ${theme.colors.primary};
            text-decoration: underline 1px;
            text-underline-offset: .4rem;
        }
    }

    @media (max-width: 850px) {
        display: flex;  
        justify-content: space-between; 
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
    font-size: 1.2rem;
    list-style: none;
    padding: 0 .2rem;
    li {
        padding: 1rem 0;
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
    font-size: 1.7rem;
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
    padding: 0;
    /* background-image: linear-gradient(50deg, ${theme.colors.secondary}, ${theme.colors.primary});
    transition: ${theme.colors.secondary} 0.2s ease-out 0s, ${theme.colors.primary} 0.2s ease-in-out 0s;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover {
        background-image: linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.primary});
    } */
    color: ${theme.colors.primary};

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
    // const [showCopySuccess, setShowCopySuccess] = useState(false);
    const [owner, setOwner] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        // 监听
        window.addEventListener('scroll', handleScroll)
        // 销毁
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    let lastScrollTop = 0;
    const handleScroll = () => {
        let clientHeight = document.documentElement.clientHeight //可视区域高度
        let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        // console.log("scrollTop", scrollTop, 'lastScrollY', lastScrollTop, 'clientHeight', clientHeight, 'scrollHeight', scrollHeight);
        lastScrollTop = document.documentElement.scrollTop
        if (scrollTop >= 35 && (scrollTop > lastScrollTop||scrollTop + clientHeight >= scrollHeight)) {
            setIsShow(true)
            setNavActive(false)
        } else {
            setIsShow(false)
        }
    }

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (role) {
            if (role === "Owner") {
                setOwner(true);
            }
        }
    }, []);
    const handleCopyRssLink = async () => {
        try {
            const rssLink = 'https://just-plain.fun/api/rss.xml';
            await navigator.clipboard.writeText(rssLink);

            // setShowCopySuccess(true);

            // setTimeout(() => {
            //     setShowCopySuccess(false);
            // }, 1500);
            window.alert("RSS link copied to clipboard :P")
        } catch (err) {
            console.error('err:', err);
        }
    };

    return (
        <BarContainer className={`show ${isShow && 'hide'}`}>
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
                    <li>
                        <a href="#RSS" onClick={handleCopyRssLink}>
                            RSS
                        </a>
                        {/* {showCopySuccess && <SuccessMessage>Copied to clipboard!</SuccessMessage>} */}
                    </li>
                    {owner && <li><a href="/compose">Compose</a></li>}
                    <Account />
                </BarList>
            </nav>
        </BarContainer>
    );
};

export default Bar;
