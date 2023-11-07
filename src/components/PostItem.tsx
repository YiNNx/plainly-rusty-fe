import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../theme';

const Post = styled.div`

  padding: 0rem 2rem;
  margin: 3rem 5rem;
  /* border-radius: 5px; */
  /* transition: transform 0.2s; */
  border-left: 2px solid ${theme.colors.secondary};
  
  
  &:hover {
    /* background-color: ${theme.colors.background}; */
    /* transform: scale(1.05); */
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

const PostTag = styled.span`
  font-family: 'Cantarell';
  background-color: ${theme.colors.block};
  /* border: 1px solid ${theme.colors.primary}; */
  float: right;
  color: ${theme.colors.primary};
  font-size: 13px;
  padding: 2px 12px;
  border-radius: 15px;
  margin: 6px 0;
  /* margin-right: 10px; */
`;

const PostTime = styled.span`
  font-family: 'JetBrainsMono';
  font-size: 14px;
  color: #b2b2b2;
  /* float: right; */
`;

const PostContent = styled.p`
  font-size: 16px;
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
