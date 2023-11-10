import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { ReactComponent as SvgAccount } from '../../assets/svg/account.svg';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from '../../models/user';
import { DropdownButton, DropdownContainer, DropdownItem, DropdownList } from '../Util/Dropdown';

const AccountContainer = styled.div`
    position: fixed;
    bottom: 5rem;
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
        fill: ${theme.colors.secondary};
        vertical-align: middle;
        width: 1.75rem;
    }

    span {
        padding: 0.6rem;
        color: ${theme.colors.primary};
        visibility: hidden;
    }

    &:hover {
        span {
            visibility: visible;
        }
        & svg {
            fill: ${theme.colors.primary};
        }
    }

    @media (max-width: 850px) {
        span {
            padding: 0.6rem;
            color: ${theme.colors.background};
            font-weight: bold;
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
        width: 2.125rem;
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

    const handleOptionClick = (option: string) => {
        setIsOpen(false);
        if (option === 'Log out') {
            handleLogout();
        } else if (option === 'Compose') {
            navigate('/compose');
        }
    };

    const simulateLogin = () => {
        setUser({
            avatar: 'https://avatars.githubusercontent.com/u/86649490?v=4',
            nickname: 'YiNNx',
        });
    };

    const handleLogout = () => {
        setUser(null)
    };

    const options = ['Compose', 'Log out']

    return (
        <div>
            {user ? (
                <DropdownContainer>
                    <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                        <AccountLoggedin>
                            <img src={user.avatar} alt="User Avatar" />
                            <span>{user.nickname}</span>
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
                // <a href="https://github.com/login/oauth/authorize?client_id=c824ff557098530ebe15" onClick={simulateLogin}>
                <AccountUnloggedin onClick={simulateLogin}>
                    <SvgAccount />
                    <span>Log in</span>
                </AccountUnloggedin>
                // </a>
            )}
        </div>
    );
};

export default Account;