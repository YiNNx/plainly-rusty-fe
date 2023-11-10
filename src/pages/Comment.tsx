import CommentList from '../components/Comment/List';
import CommentBox from '../components/Comment/Box';
import { Comment } from '../models/comment';
import React, { useState } from 'react';
import { PostCommentContainer } from '../containers/Cantainers';

const PostComment: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([
        { id: 1, nickname: 'YiNN', time: '11/08/2023', content: '好好好' },
        { id: 1, nickname: 'test', time: '11/08/2023', content: '好好好' },
        { id: 1, nickname: 'test', time: '11/08/2023', content: '好好好' },
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
