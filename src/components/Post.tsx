import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostItem = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05); /* 鼠标悬停时的缩放效果 */
  }
`;

const PostTitle = styled.h3`
  font-size: 20px;
  
  a{
      text-decoration: none;
      color: #333;
  }
`;

interface PostProps {
    title: string;
    id: string;
    content: string;
}

const Post: React.FC<PostProps> = ({ title, id }) => {
    return (
        <PostItem>
            <PostTitle><Link to={`/post/${id}`}>{title}</Link></PostTitle>
        </PostItem>
    );
};

export default Post;
