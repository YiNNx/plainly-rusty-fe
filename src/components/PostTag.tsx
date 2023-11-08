import styled from 'styled-components';
import { theme } from '../theme';


export const PostTag = styled.span`
  font-family: 'Cantarell';
  background-color: ${theme.colors.block};
  /* border: 1px solid ${theme.colors.primary}; */
  float: right;
  color: ${theme.colors.primary};
  font-size: 0.8125rem;
  padding: 0.1rem 0.75rem;
  border-radius: 2rem;
  margin: 0.375rem 0;
  /* margin-right: 10px; */
`;