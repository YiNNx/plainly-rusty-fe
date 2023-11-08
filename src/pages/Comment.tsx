import CommentList from '../components/CommentList';
import CommentBox from '../components/CommentBox';
import { Comment } from '../models/comment';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const PostCommentContainer = styled.div`
  font-family: 'Cantarell','SourceHanSerifCN';
  margin-top: 20px;

  h3,strong {
    color: ${theme.colors.primary};
  }
`;

const PostComment: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([
        { id: 1, nickname: 'test', time: '11/08/2023', content: '好好好' }
    ]);

    const handleCommentSubmit = (newComment: Comment) => {
        setComments([...comments, newComment]);
    };

    return (
        <PostCommentContainer>
            <CommentList comments={comments} />
            <CommentBox onCommentSubmit={handleCommentSubmit} />
        </PostCommentContainer>
    );
};

export default PostComment;
