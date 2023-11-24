import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CommentList, { Loading } from '../components/Comment/List';
import CommentBox from '../components/Comment/Box';
import { PostCommentContainer } from '../containers/Cantainers';
import { Comment } from '../models/comment';

const COMMENTS_QUERY = gql`
  query Comments($postId: Int!, $limit: Int!, $offset: Int!) {
    comments(
      filters: { postId: { eq: $postId }, status: { eq: PUBLIC } }
      orderBy: { time: DESC }
      pagination: { offset: { limit: $limit, offset: $offset } }
    ) {
      nodes {
        id
        parentId
        githubName
        time
        content
      }
    }
  }
`;


const PostComment: React.FC = () => {
    const limit = 10;
    const offset = 0;
    const { id = '' } = useParams();
    const [final, setFinal] = useState(false);

    const { data: commentsData, loading, fetchMore } = useQuery(COMMENTS_QUERY, {
        variables: { postId: parseInt(id, 10), limit, offset },
        fetchPolicy: 'cache-and-network',
    });

    const comments: Comment[] = commentsData?.comments?.nodes || [];
    const hasMoreComments = comments.length >= limit;

    const handleLoadMore = () => {
        fetchMore({
            variables: { offset: comments.length },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;

                const newComments: Comment[] = fetchMoreResult.comments.nodes;
                if (newComments.length < limit) {
                    setFinal(true);
                }

                return {
                    comments: {
                        nodes: prev.comments.nodes.concat(newComments),
                    },
                };
            },
        });
    };

    const handleCommentSubmit = (newComment: Comment) => {
        // Assuming the mutation for adding a new comment is available,
        // you can use it here and then update the comments list accordingly.
        // After adding the new comment, you may want to refetch the comments
        // or update the cache to include the new comment.
    };

    return (
        <PostCommentContainer>
            <CommentList comments={comments} />
            {!loading && hasMoreComments && !final && (
                <Loading onClick={handleLoadMore}>Load More</Loading>
            )}
            {!loading && <CommentBox onCommentSubmit={handleCommentSubmit} />}
        </PostCommentContainer>
    );
};

export default PostComment;