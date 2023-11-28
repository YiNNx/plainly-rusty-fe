import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PostDetail from '../components/Post/Detail';
import PostComment from './Comment';
import { PostContainer } from '../containers/Cantainers';
import Breadcrumbs from '../components/Util/Breadcrumbs';

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

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId },
  });

  if (loading) {
    return <br />;
  }

  if (error || !data || !data.posts || !data.posts.nodes.length) {
    return <code>Post not found.</code>;
  }

  const post = data.posts.nodes[0];

  return (
    <PostContainer>
      <Breadcrumbs items={breadcrumbItems} />
      <PostDetail
        title={post.title}
        id={parseInt(post.id)}
        content={post.content}
        time={post.time}
        tags={post.tags.nodes.map((tag: any) => tag.name)}
      />
      <PostComment />
    </PostContainer>
  );
};

export default Post;
