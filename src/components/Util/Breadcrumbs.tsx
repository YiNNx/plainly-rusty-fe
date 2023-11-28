import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';

interface BreadcrumbItem {
  label: string;
  to: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();

  return (
    <Nav aria-label="breadcrumb">
      <List>
        {items.map((item, index) => (
          <Item
            key={index}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            {index === items.length - 1 ? (
              <a href={`${location.pathname}`}>{item.label}</a>
            ) : (
              <a href={item.to}>{item.label}</a>
            )}
          </Item>
        ))}
      </List>
    </Nav>
  );
};

const Nav = styled.nav`
  margin-bottom: 16px;
  @media (max-width: 850px) {
    visibility: hidden;
  }
`;

const List = styled.ol`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: .95rem;
  color: ${theme.colors.grey};
  /* margin-bottom: .8rem; */

  a{
    color: ${theme.colors.tertiary};
    &:hover {
      text-decoration: underline 1px;
      text-underline-offset: .3rem;
    }
  }

  &:not(:last-child)::after {
    content: '/';
    margin: 0 8px;
  }
`;

export default Breadcrumbs;