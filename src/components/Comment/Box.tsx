import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import gql from 'graphql-tag';
import { ReactComponent as Send } from '../../assets/svg/send.svg';
import { theme } from '../../theme';
import { ErrorMessage } from '../Util/Message';

const COMMENT_MUTATION = gql`
  mutation Comment($content: String!, $post_id: Int!) {
    comment(content: $content, post_id: $post_id) 
  }
`;


const CommentForm = styled.form`
  margin: 2rem 0;
`;

const CommentInput = styled.textarea`
  padding: 0.625rem;
  margin-bottom: 0.625rem;
  border: 0;
  border-radius: 1rem;
  background-color: ${theme.colors.block};
  width: 85%;
  height: 7rem;
  padding: 1rem 1.5rem;
  resize: none;
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }
`;

const CommentButton = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    fill: ${theme.colors.secondary};
    width: 1.75rem;
  }

  &:hover {
    & svg {
      fill: ${theme.colors.primary};
    }
  }
`;


const CommentBox: React.FC = () => {
  const { id: postId } = useParams();
  const [comment, setComment] = useState<string>('');

  const [commentMutation, { error }] = useMutation(COMMENT_MUTATION, {
    onCompleted: () => {
      window.location.reload();
    },
    onError: (error) => {
      console.error('Mutation error:', error.message);
    },
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  });

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() !== '' && postId != null) {
      commentMutation({
        variables: { content: comment, post_id: parseInt(postId) },
      });
    }
  };

  return (
    <CommentForm onSubmit={handleCommentSubmit}>
      <div>
        <CommentInput
          placeholder={localStorage.getItem('token') ? "Write your comment" : "Please log in first"}
          value={comment}
          onChange={handleCommentChange}
        />
        <CommentButton type="submit">
          <Send />
        </CommentButton>
      </div>
      {error && <ErrorMessage>Error: {error.message}</ErrorMessage>}

    </CommentForm>
  );
};

export default CommentBox;
