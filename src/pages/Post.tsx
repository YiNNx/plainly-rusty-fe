import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PostDetail from '../components/Post/Detail';
import PostComment from './Comment';
import { PostContainer } from '../containers/Cantainers';
import Breadcrumbs from '../components/Util/Breadcrumbs';

// 定义 GraphQL 查询
const GET_POST = gql`
  query Posts($postId: Int!) {
    posts(filters: { id: { eq: $postId }, status: { eq: PUBLIC } }) {
      nodes {
        id
        title
        time
        content
        status
        tags {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;

const breadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Posts', to: '/' },
  { label: 'Detail', to: '/post/:id' },
];

const Post: React.FC = () => {
  const { id } = useParams();
  const postId = parseInt(id || '', 10);

  // 使用 useQuery hook 发送 GraphQL 查询
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data || !data.posts || !data.posts.nodes.length) {
    return <p>Error loading post.</p>;
  }

  const post = data.posts.nodes[0];

  return (
    <PostContainer>
      <Breadcrumbs items={breadcrumbItems} />
      <PostDetail
        title={post.title}
        id={post.id}
        content={post.content}
        time={post.time}
        tag={post.tags.nodes.length > 0 ? post.tags.nodes[0].name : ''} // Assuming only one tag for simplicity
      />
      <PostComment />
    </PostContainer>
  );
};

export default Post;
