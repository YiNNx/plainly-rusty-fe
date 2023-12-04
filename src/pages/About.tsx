import React from 'react';
import PostDetail from '../components/Post/Detail';
import { PostContainer } from '../containers/Cantainers';
import Breadcrumbs from '../components/Util/Breadcrumbs';

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
];

const About: React.FC = () => {
    const post = {
        id: 0,
        title: '关于',
        content: '',
        tag: '',
        time: '',
    };

    return (
        <PostContainer>
            <Breadcrumbs items={breadcrumbItems} />
            <PostDetail
                title={post.title}
                id={post.id}
                content={post.content}
                time={post.time}
                tags={[]} />
        </PostContainer>
    );
};

export default About;
