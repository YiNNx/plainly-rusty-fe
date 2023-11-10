import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { PostMarkdownContent, WithSyntaxHighlighter } from './Markdown';
import { ReactComponent as IconEdit } from '../assets/edit.svg'
import { ReactComponent as IconDelete } from '../assets/delete.svg'

const PostTitle = styled.h2`
  font-family: 'SourceHanSerifCN';
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  margin-top: 1rem;
  margin-bottom: .5rem;
  display: flex;
  align-items: center; /* Center align items vertically */
  
  span {
    flex: 1; /* Take up remaining space */
  }

  svg {
    fill: ${theme.colors.secondary};
    width: 1.3rem;
    margin-left: 0.8rem;

    &:hover {
      fill: ${theme.colors.primary};
    }
  }
`;

const PostTag = styled.span`
  background-color: ${theme.colors.block};
  color: ${theme.colors.primary};
  font-size: .9rem;
  padding: 0.1rem 0.75rem;
  border-radius: 2rem;
`;

const PostTime = styled.span`
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
    <div>
      <div>
        <PostTitle>
          <span>{title}</span>
          <IconDelete /><IconEdit />
        </PostTitle>
      </div>
      <PostMarkdownContent>
        <WithSyntaxHighlighter content={content} />
      </PostMarkdownContent>
      <div>
        <PostTag>{tag}</PostTag>
        <PostTime>{time}</PostTime>
      </div>
    </div>
  );
};

export default PostDetail;
