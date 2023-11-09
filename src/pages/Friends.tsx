import React from 'react';
import PostDetail from '../components/PostDetail';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 2rem 1rem 3rem 2rem;
  max-width: 51vw;
`;

const Friends: React.FC = () => {
    const post = {
        id: '',
        title: '友链',
        content: '- 友链1: [链接]()\n- 友链2: [链接]()',
        tag: '',
        time: '',
    };

    return (
        <PostContainer>
            <PostDetail
                title={post.title}
                id={post.id}
                content={post.content}
                time={post.time}
                tag={post.tag} />
        </PostContainer>
    );
};

export default Friends;
