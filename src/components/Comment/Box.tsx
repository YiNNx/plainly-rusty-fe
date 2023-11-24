import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../../models/comment';
import { ReactComponent as Send } from '../../assets/svg/send.svg'
import { theme } from '../../theme';

// 评论发布组件
const CommentForm = styled.form`
    margin: 2rem 0;

    textarea::placeholder {
        color: ${theme.colors.grey};
    }
`;

const CommentInput = styled.textarea`
    padding: 0.625;
    margin-bottom: 0.625rem;
    border:0;
    border-radius:1rem;
    background-color:${theme.colors.block};
    width: 85%;
    height: 7rem;
    padding: 1rem 1.5rem;
    resize: none;
    font-size: .9rem;
    
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

    &:hover{
        & svg {
            fill: ${theme.colors.primary};
        }
    }
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
                githubName: 'John Doe',
                time: new Date().toLocaleString(),
                content: comment,
            };
            onCommentSubmit(newComment);
            setComment('');
        }
    };

    return (
        <CommentForm onSubmit={handleCommentSubmit}>
            <div>
                <CommentInput
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                <CommentButton type="submit"><Send /></CommentButton>
            </div >
        </CommentForm>
    );
};

export default CommentBox;