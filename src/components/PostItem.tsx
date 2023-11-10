import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import { PostTag } from './PostTag';

const PostTitle = styled.span`
  font-family: 'SourceHanSerifCN';
  color: ${theme.colors.tertiary};
  font-size: 1.35rem;
  font-weight: bold;
  /* margin: 1rem; */
  @media (max-width: 850px) {
    color:  ${theme.colors.primary};
  }
`;

const Post = styled.div`

  padding: 0rem 1.7rem;
  margin: 3rem 1rem 3rem 2rem;
  border-left: 2px solid ${theme.colors.secondary};
  
  &:hover {
    border-left: 2px solid ${theme.colors.tertiary};
    ${PostTitle} {
      color: ${theme.colors.primary};

    }
    /* background-color: ${theme.colors.background}; */
    /* transform: scale(1.05); */
  /* border-left: 2px solid ${theme.colors.shadow}; */
  }

  @media (max-width: 850px) {
    margin: 2.75rem 1.5rem;
    padding: 0rem 1.1rem;
    border-left: none;
    &:hover {
    border-left: none;
    }
  }
  `;


const PostTime = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.grey};
  @media (max-width: 850px) {
    color:  ${theme.colors.tertiary};
  }
`;

const PostContent = styled.p`
  line-height: 1.6rem;
  font-size: 1rem;
  color: ${theme.colors.text};
  margin: .4rem 0;
`;


const ResponsiveForPC = styled.div`
    @media (max-width: 850px) {
      ${PostTag} {
        visibility: hidden;
    }
  }
`

const ResponsiveForMobile = styled.div`
      ${PostTag} {
        visibility: hidden;
    }
   @media (max-width: 850px) {
      ${PostTag} {
        visibility: visible;
        margin: 0.1rem 0;
  color: ${theme.colors.secondary};

    }
  }
`


interface PostItemProps {
  title: string;
  id: string;
  tag: string;
  content: string;
  time: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, content, id, tag, time }) => {
  return (
    <Post>
      <Link to={`/post/${id}`}>
        <ResponsiveForPC>
          <PostTitle>{title}</PostTitle>
          <PostTag>{tag}</PostTag>
        </ResponsiveForPC>
        <PostContent>{content}</PostContent>
        <ResponsiveForMobile>
          <PostTime>{time}</PostTime>
          <PostTag>{tag}</PostTag>
        </ResponsiveForMobile>
      </Link>
    </Post>
  );
};

export default PostItem;
