import React from 'react';
import PostDetail from '../components/Post/Detail';
import { PostContainer } from '../containers/Containers';
import Breadcrumbs from '../components/Util/Breadcrumbs';

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Friends', to: '/friends' },
];

const Friends: React.FC = () => {
    const post = {
        id: 0,
        title: '友链',
        content: '---\n\n- jyi2ya - https://jyi2ya.github.io\n\n- 小⭐ - https://ggg.life\n\n- ligen131 - https://ligen.life\n\n- dekrt - https://dekrt.cn\n\n- Lyt99 - https://i.lyt.moe\n\n- Xeu - https://xeu.life\n\n- Ryao - https://blog.ryaoknw.site\n\n',
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

export default Friends;
