import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';
import { PostTag } from './PostTag';

const Post = styled.div`

  padding: 0rem 1.7rem;
  margin: 3rem 5rem;
  /* border-radius: 5px; */
  /* transition: transform 0.2s; */
  border-left: 2px solid ${theme.colors.secondary};
  
  
  &:hover {
    /* background-color: ${theme.colors.background}; */
    /* transform: scale(1.05); */
  border-left: 2px solid ${theme.colors.shadow};
  }
  `;

const PostTitle = styled.span`
  color: ${theme.colors.primary};
  font-size: 1.25rem;
  font-weight: bold;
  /* margin: 1rem; */
  
  &:hover {

  }
`;



const PostTime = styled.span`
  font-family: 'Cantarell';
  font-size: 0.875rem;
  color: #b2b2b2;
  /* float: right; */
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
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
