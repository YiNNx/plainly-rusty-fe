import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ReactComponent as SvgAccount } from '../../assets/svg/account.svg';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from '../../models/user';
import { DropdownButton, DropdownContainer, DropdownItem, DropdownList } from '../Util/Dropdown';

const AccountContainer = styled.div`
    position: fixed;
    bottom: 5rem;
    font-size: 1.1rem;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 850px) {
        position: relative;
        bottom: auto;
        svg,img {
            visibility: hidden;
        }
    }
`;

const AccountUnloggedin = styled(AccountContainer)`
    svg {
        fill: ${theme.colors.tertiary};
        vertical-align: middle;
        width: 2.1rem;
    }

    span {
        padding: 0.6rem;
        color: ${theme.colors.tertiary};
        visibility: hidden;
        
    }

    &:hover {
        span {
            visibility: visible;
            text-decoration: underline 1px;
            text-underline-offset: .4rem;
        }
    }

    @media (max-width: 850px) {
        span {
            padding: 0.6rem;
            color: ${theme.colors.background};
            visibility: visible;
        }
        svg {
            width: 0;
        }
    }
`;

const AccountLoggedin = styled(AccountContainer)`
    span {
        padding: 0.3rem;
        color: ${theme.colors.tertiary};
        font-weight: bold;
    }
    
    img {
        width: 2.6rem;
        border-radius: 50%;
        border: 1px solid rgba(31,35,40,0.15);
        vertical-align: middle;
        margin-right: 0.5rem;
    }

    @media (max-width: 850px) {
        span {
            visibility: hidden;
        }
    }
`;

const Account: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserInfo | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        const avatar = localStorage.getItem('avatar');

        if (username) {
            if (!avatar) {
                setUser((prevUser) => ({
                    ...prevUser,
                    username: username,
                    avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
                }));
            } else {
                setUser((prevUser) => ({
                    ...prevUser,
                    username: username,
                    avatar: avatar,
                }));
            }
        }
    }, []);

    const handleOptionClick = (option: string) => {
        setIsOpen(false);
        if (option === 'Log out') {
            handleLogout();
        } else if (option === 'Compose') {
            navigate('/compose');
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('avatar');
        localStorage.removeItem('role');
    };

    let options = ['Log out'];

    return (
        <div>
            {user ? (
                <DropdownContainer>
                    <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                        <AccountLoggedin>
                            <img src={user.avatar} alt="" />
                            <span>{user.username}</span>
                        </AccountLoggedin>
                    </DropdownButton>
                    {isOpen && (
                        <DropdownList>
                            {options.map((option) => (
                                <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
                                    {option}
                                </DropdownItem>
                            ))}
                        </DropdownList>
                    )}
                </DropdownContainer>
            ) : (
                <a href="https://github.com/login/oauth/authorize?client_id=c824ff557098530ebe15">
                    <AccountUnloggedin>
                        <SvgAccount />
                        <span>Log in</span>
                    </AccountUnloggedin>
                </a>
            )}
        </div>
    );
};

export default Account;