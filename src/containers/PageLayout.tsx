import styled from 'styled-components';
import { theme } from '../theme';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column; /* 修改为垂直方向在移动端显示 */
  
  @media (min-width: 768px) {
    flex-direction: row-reverse; /* 在宽度大于等于768px时恢复水平方向显示 */
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 4rem 7vw 4rem 17vw; 
  margin-right: 20vw;
  max-width: 70vw;
  
  @media (max-width: 768px) {
    padding: 0; /* 在小于768px的屏幕宽度时调整样式 */
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
  
  @media (max-width: 767px) {
    height: 1rem;
    width: 100%;
    border-left: none; /* 移动端去掉左边框 */
  }
`;
