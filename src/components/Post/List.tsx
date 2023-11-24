import styled from 'styled-components';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const Post = lazy(() => import('./Item'));

const GET_POSTS = gql`
  query Posts($limit: Int, $offset: Int) {
    posts(
      filters: { status: { eq: PUBLIC } }
      orderBy: { time: DESC }
      pagination: { offset: { limit: $limit, offset: $offset } }
    ) {
      nodes {
        id
        title
        time
        summary
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

interface Tag {
  id: number;
  name: string;
}

interface PostData {
  id: number;
  title: string;
  time: string;
  summary: string;
  tags: {
    nodes: Tag[];
  };
}

interface GetPostsData {
  posts: {
    nodes: PostData[];
  };
}

const PostListContainer = styled.div`
`;

const BlogList: React.FC = () => {
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { loading, error, data, fetchMore } = useQuery<GetPostsData>(GET_POSTS, {
    variables: { limit, offset },
  });
  const [allPosts, setAllPosts] = useState<PostData[]>([]);

  useEffect(() => {
    if (data) {
      setAllPosts((prevPosts) => [...prevPosts, ...data.posts.nodes]);
    }
  }, [data]);

  const fetchMorePosts = async () => {
    const newOffset = offset + limit;
    const newData = await fetchMore({
      variables: { offset: newOffset },
    });

    setOffset(newOffset);

    if (newData.data.posts.nodes.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <PostListContainer>
      <Suspense fallback={<p>Loading...</p>}>
        <InfiniteScroll
          dataLength={allPosts.length}
          next={fetchMorePosts}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
          {allPosts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              content={post.summary}
              id={post.id.toString()}
              time={post.time}
              tags={post.tags.nodes.map((tag) => tag.name)}
            />
          ))}
        </InfiniteScroll>
      </Suspense>
    </PostListContainer>
  );
};

export default BlogList;