import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { PostMarkdownContent, WithSyntaxHighlighter } from './Markdown';

const PostContainer = styled.div`
  margin: 3rem 1rem 3rem 2rem;
  max-width: 51vw;

`;

const PostTitle = styled.h2`
  font-size: 1.75rem;
  color: ${theme.colors.tertiary};
  margin: .4rem 0;
`;


const PostTag = styled.span`
  font-family: 'Cantarell';
  background-color: ${theme.colors.block};
  color: ${theme.colors.primary};
  font-size: .9rem;
  padding: 0.1rem 0.75rem;
  border-radius: 2rem;
`;

const PostTime = styled.span`
  font-family: 'Cantarell';
  font-size: 0.875rem;
  color: ${theme.colors.grey};
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
      <PostMarkdownContent>
        <WithSyntaxHighlighter content={content} />
      </PostMarkdownContent>
      <div>
        <PostTag>{tag}</PostTag>
        <PostTime>{time}</PostTime>
      </div>
    </PostContainer>
  );
};

export default PostDetail;