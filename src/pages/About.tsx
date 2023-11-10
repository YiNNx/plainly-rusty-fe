import React from 'react';
import PostDetail from '../components/Post/Detail';
import { PostContainer } from '../containers/Cantainers';

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
