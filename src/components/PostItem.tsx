import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import { PostTag } from './PostTag';

const Post = styled.div`

  padding: 0rem 1.7rem;
  margin: 3rem 1rem 3rem 2rem;
  border-left: 2px solid ${theme.colors.secondary};
  
  &:hover {
    border-left: 2px solid ${theme.colors.tertiary};
    span {
      color: ${theme.colors.primary};

    }
    /* background-color: ${theme.colors.background}; */
    /* transform: scale(1.05); */
  /* border-left: 2px solid ${theme.colors.shadow}; */
  }

  @media (max-width: 850px) {
    margin: 3rem 1.5rem;
    padding: 0rem 1.1rem;
    border-left: none;
    &:hover {
    border-left: none;
    }
  }
  `;

const PostTitle = styled.span`
  color: ${theme.colors.tertiary};
  font-size: 1.35rem;
  font-weight: bold;
  /* margin: 1rem; */
  &:hover {

  }
`;



const PostTime = styled.p`
  font-size: 0.875rem;
  color: #b2b2b2;
  /* float: right; */
`;

const PostContent = styled.p`
  line-height: 1.6rem;
  font-size: 1rem;
  color: ${theme.colors.text};
  margin: .4rem 0;
`;


interface PostItemProps {
  title: string;
  id: string;
  tag: string;
  content: string;
  time: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, content, id, tag, time }) => {
  return (
    <Link to={`/post/${id}`}>
      <Post>
        <div>
          <PostTitle>{title}</PostTitle>
          <PostTag>{tag}</PostTag>
        </div>
        <PostContent>{content}</PostContent>
        <PostTime>{time}</PostTime>
      </Post>
    </Link>
  );
};

export default PostItem;
