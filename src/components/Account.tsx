import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { ReactComponent as SvgAccount } from '../assets/account.svg';


interface DropdownProps {
  options: string[];
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  width: 8rem;
  bottom: 100%;
  left: 0;
  margin-bottom: 5px;
  padding: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }
`;


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
`;

interface UserInfo {
  avatar: string;
  nickname: string;
}


const Account: React.FC = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
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
