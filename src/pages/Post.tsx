import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
`;

const PostTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const PostContent = styled.p`
  font-size: 16px;
  color: #555;
  min-height: 10rem;
`;

const PostTag = styled.span`
  background-color: #78accf;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const PostTime = styled.span`
  font-size: 14px;
  color: #999;
`;


const Post: React.FC = () => {
  const { id } = useParams(); // 通过useParams()获取帖子ID

  // 根据帖子ID从API或数据源获取帖子内容
  const post = {
    title: 'Sample Post Title',
    content: 'This is the content of the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tag: 'Programming',
    time: 'November 12, 2023',
  };
  
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content}</PostContent>
      <div>
        <PostTag>{post.tag}</PostTag>
        <PostTime>{post.time}</PostTime>
      </div>
    </PostContainer>
  );
};

export default Post;
