import React from 'react';
import PostDetail from '../components/Post/Detail';
import { PostContainer } from '../containers/Cantainers';
import Breadcrumbs from '../components/Util/Breadcrumbs';

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Posts', to: '/' },
];
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
            <Breadcrumbs items={breadcrumbItems} />
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
