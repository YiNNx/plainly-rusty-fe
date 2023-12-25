import React from 'react';
import PostDetail from '../components/Post/Detail';
import { PostContainer } from '../containers/Containers';
import Breadcrumbs from '../components/Util/Breadcrumbs';

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
];

const About: React.FC = () => {
    const post = {
        id: 0,
        title: '关于',
        content: '因为从来都不擅长自我介绍，所以这基本是一个空页面\n\n我的 Github：[YiNNx](https://github.com/YiNNx)\n\n我的邮箱：yinnnxt@gmail.com',
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
