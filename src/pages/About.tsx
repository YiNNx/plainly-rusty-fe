import React from 'react';
import PostDetail from '../components/PostDetail';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 2rem 1rem 3rem 2rem;
  max-width: 51vw;
`;

const About: React.FC = () => {
    const post = {
        id: '',
        title: '关于',
        content: '这是一篇关于',
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

export default About;
