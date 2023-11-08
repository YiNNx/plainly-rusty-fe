import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../models/comment';

// 评论区组件
const CommentsContainer = styled.div`
`;

const CommentItem = styled.div`
  display: flex;
  /* border: 1px solid #ddd; */
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentContent = styled.div`
  flex: 1;
`;

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <CommentsContainer>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <CommentContent>
            <div>
              <strong>{comment.nickname}</strong> • {comment.time}
            </div>
            <div>{comment.content}</div>
          </CommentContent>
        </CommentItem>
      ))}
    </CommentsContainer>
  );
};


export default CommentList;
