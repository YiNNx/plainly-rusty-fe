import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail';

const Post: React.FC = () => {
  const { id } = useParams(); // 通过useParams()获取帖子ID

  const post = {
    id: '1',
    title: '海拉鲁游记',
    content: '借了朋友的旷野之息卡带试玩，结果国庆剩下的假期全都在超高强度玩塞尔达，再也没打开 ns 里的其他游戏......一旦玩过塞尔达，你这辈子就定型了，你一辈子就沉迷在海拉鲁里了，一个沉迷塞尔达的人再坏也坏不到哪里去，这就是我的善恶观！正文之海拉鲁游记，开始新手村的美丽景色边爬山边看日落林克的回眸给它喂苹果会带你去找宝箱的乖乖伯恩山克洛格的恶趣味奇怪仪式好耶，新衣服和新坐骑成为料理大师重生之我是海拉鲁恶霸卓拉族的奇怪口癖和成语',
    tag: 'Programming',
    time: 'November 12, 2023',
  };

  return (
    <PostDetail
      title={post.title}
      id={post.id}
      content={post.content}
      time={post.time}
      tag={post.tag} />
  );
};

export default Post;
