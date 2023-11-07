import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const PostContainer = styled.div`
  padding: 1.25rem;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.primary};
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
  min-height: 10rem;
`;

const PostTag = styled.span`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.background};
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const PostTime = styled.span`
  font-size: 14px;
  color: #999;
`;

interface PostDetailProps {
    title: string;
    id: string;
    content: string;
    time: string;
    tag: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ title, content, time, tag, id }) => {
    return (
        <PostContainer>
            <PostTitle>{title}</PostTitle>
            <PostContent>{content}</PostContent>
            <div>
                <PostTag>{tag}</PostTag>
                <PostTime>{time}</PostTime>
            </div>
        </PostContainer>
    );
};

export default PostDetail;