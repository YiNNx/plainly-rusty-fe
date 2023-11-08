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
  font-family: 'Cantarell';
  background-color: ${theme.colors.block};
  /* border: 1px solid ${theme.colors.primary}; */
  color: ${theme.colors.primary};
  font-size: .9rem;
  padding: 0.1rem 0.75rem;
  border-radius: 2rem;
`;

const PostTime = styled.span`
  font-family: 'Cantarell';
  font-size: 0.875rem;
  color: #b2b2b2;
  float: right;
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