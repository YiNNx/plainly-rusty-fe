import styled from 'styled-components';
import { theme } from '../theme';
import { ReactComponent as SvgAccount } from '../assets/account.svg'

const AccountContainer = styled.div`
  position: fixed;
  bottom: 5rem;

  &:hover {
    span{
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
    padding: .6rem;
    color: ${theme.colors.primary};
    visibility: hidden;
  }
`;

const Account: React.FC = () => {
  return (
    <a href="https://github.com/login/oauth/authorize?client_id=c824ff557098530ebe15">
      <AccountContainer>
        <SvgAccount />
        <span>Log in</span>
      </AccountContainer>
    </a>
  );
};

export default Account;