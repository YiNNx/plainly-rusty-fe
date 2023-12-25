import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CommentList, { Loading } from '../components/Comment/List';
import CommentBox from '../components/Comment/Box';
import { PostCommentContainer } from '../containers/Containers';
import { Comment } from '../models/comment';

const COMMENTS_QUERY = gql`
  query Comments($postId: Int!, $limit: Int!, $offset: Int!) {
    comments(
      filters: { postId: { eq: $postId }, status: { eq: PUBLIC } }
      orderBy: { time: ASC }
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

const fetchAvatarWithRetry = async (username: string, attemptsLeft: number = 3): Promise<string> => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data.avatar_url;
    } catch (error) {
        console.error('Error fetching user data:', error);

        if (attemptsLeft > 1) {
            return fetchAvatarWithRetry(username, attemptsLeft - 1);
        } else {
            return '';
        }
    }
};

const PostComment: React.FC = () => {
    const limit = 10;
    const offset = 0;
    const { id = '' } = useParams();
    const [final, setFinal] = useState(false);
    const [commentAvatars, setCommentAvatars] = useState<string[]>([]);
    const [avatarsLoaded, setAvatarsLoaded] = useState(false); // Add this state

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

    useEffect(() => {
        const fetchAvatars = async () => {
            const avatarPromises = comments.map((comment) =>
                fetchAvatarWithRetry(comment.githubName)
            );

            try {
                const resolvedAvatars = await Promise.all(avatarPromises);
                setCommentAvatars(resolvedAvatars);
                setAvatarsLoaded(true); // Set avatarsLoaded to true when avatars are loaded
            } catch (error) {
                console.error('Error fetching avatars:', error);
            }
        };

        fetchAvatars();
    }, [comments]);

    // Assign fetched avatar URLs to the comment.avatar property
    const commentsWithAvatars: Comment[] = comments.map((comment, index) => ({
        ...comment,
        avatar: commentAvatars[index] || '',
    }));

    return (
        <PostCommentContainer>
            {avatarsLoaded ? (
                <CommentList comments={commentsWithAvatars} />
            ) : (
                /* Show loading animation when avatars are not loaded */
                <Loading>Loading Avatars...</Loading>
            )}
            {!loading && hasMoreComments && !final && (
                <Loading onClick={handleLoadMore}>Load More</Loading>
            )}
            {!loading && <CommentBox />}
        </PostCommentContainer>
    );
};

export default PostComment;
