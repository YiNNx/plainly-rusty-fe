import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { ReactComponent as SvgAccount } from '../assets/account.svg';
import { useNavigate } from 'react-router-dom';

const UnloginStatus = styled.div`
  position: fixed;
  bottom: 5rem;

  &:hover {
    span {
      visibility: visible;
    }
    & svg {
      fill: ${theme.colors.primary};
    }
  }

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

  @media (max-width: 850px) {
    position: relative;
    bottom: auto;

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

const LoginStatus = styled.div`
  position: fixed;
  bottom: 5rem;

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
    position: relative;
    bottom: auto;

    span {
    visibility: hidden;
  }
  img {
    visibility: hidden;
  }
  }
`;

interface DropdownProps {
  options: string[];
}

const DropdownContainer = styled.div`
  position: fixed;
  bottom: 5rem;
`;

const DropdownButton = styled.button`
  outline: none;
  padding: 0;
  font-size: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  min-width: 8rem;
  position: absolute; 
  top: auto;
  bottom: 100%;
  left: 0;
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 2px 6px ${theme.colors.shadow};
  border-radius: 1rem;
`;

const DropdownItem = styled.li`
  margin: 0 1rem;
  font-size: 0.875rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

interface UserInfo {
  avatar: string;
  nickname: string;
}


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

  // 模拟用户登录
  const simulateLogin = () => {
    setUser({
      avatar: 'https://avatars.githubusercontent.com/u/86649490?v=4',
      nickname: 'YiNNx',
    });
  };

  const handleLogout = () => {
    // 模拟用户登出
    setUser(null)
  };

  const options = ['Compose', 'Log out']

  return (
    <div>
      {user ? (
        <DropdownContainer>
          <DropdownButton onClick={() => setIsOpen(!isOpen)}>
            <LoginStatus>
              <img src={user.avatar} alt="User Avatar" />
              <span>{user.nickname}</span>
            </LoginStatus>
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
        <UnloginStatus onClick={simulateLogin}>
          <SvgAccount />
          <span>Log in</span>
        </UnloginStatus>
        // </a>
      )}
    </div>
  );
};

export default Account;
