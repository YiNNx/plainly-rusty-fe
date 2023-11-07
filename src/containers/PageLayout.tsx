import styled from 'styled-components';
import { theme } from '../theme';
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse; /* 反转主轴方向，将Header放在右侧 */
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 4rem 5rem 4rem 10rem; 
  margin-right: 20rem;
`;

export const Sidebar = styled.div`
  padding: 4rem 4rem;
  width: 12rem; /* 调整边栏的宽度 */
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  background-color: ${theme.colors.background}; 
  border-left: 2px solid #f5f5f5;
`;

