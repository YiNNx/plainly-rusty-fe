import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../models/comment';

// 评论发布组件
const CommentForm = styled.form`
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const CommentButton = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
`;

interface CommentBoxProps {
    onCommentSubmit: (comment: Comment) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onCommentSubmit }) => {
    const [comment, setComment] = useState<string>('');

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim() !== '') {
            const newComment: Comment = {
                id: new Date().getTime(),
                nickname: 'John Doe',
                time: new Date().toLocaleString(),
                content: comment,
            };
            onCommentSubmit(newComment);
            setComment('');
        }
    };

    return (
        <CommentForm onSubmit={handleCommentSubmit}>
            <h3>Add a Comment</h3>
            <CommentInput
                placeholder="Write your comment..."
                value={comment}
                onChange={handleCommentChange}
            />
            <CommentButton type="submit">Post Comment</CommentButton>
        </CommentForm>
    );
};

export default CommentBox;