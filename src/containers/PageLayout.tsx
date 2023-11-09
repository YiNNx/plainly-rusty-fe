import styled from 'styled-components';
import { theme } from '../theme';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 4rem 7vw 4rem 17vw; 
  margin-right: 20vw;
  max-width: 70vw;
`;

export const Sidebar = styled.div`
  padding: 4rem 5vw 4rem 3vw;
  width: 13vw; 
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  background-color: ${theme.colors.background}; 
  border-left: 2px solid #f5f5f5;
`;

