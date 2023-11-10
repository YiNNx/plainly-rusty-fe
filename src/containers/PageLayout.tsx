import styled from 'styled-components';
import { theme } from '../theme';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 850px) {
    flex-direction: row-reverse;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 4rem 7vw 4rem 17vw; 
  margin-right: 20vw;
  max-width: 70vw;
  
  @media (max-width: 850px) {
    padding: 2.8rem 0;
    margin-right: 0;
    max-width: none;
    max-width: 100vw;
  }
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
  
  @media (max-width: 850px) {
    right: 0;
    top: 0;
    padding: 0;
    height: 1rem;
    width: 100%;
    border-left: none; /* 移动端去掉左边框 */
  }
`;
