import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { PostMarkdownContent, WithSyntaxHighlighter } from './Markdown';
import { ReactComponent as IconEdit } from '../../assets/svg/edit.svg'
import { ReactComponent as IconDelete } from '../../assets/svg/delete.svg'
import { TagPostDetail } from '../Util/Tag';
import { TimePostDetail } from '../Util/Time';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const PostTitle = styled.h2`
    font-family: 'SourceHanSerifCN';
    font-size: 1.9rem;
    color: ${theme.colors.primary};
    margin: 0 0 .7rem 0;
    display: flex;
    text-align: left;

    align-items: center; 

    span {
        flex: 1; 
    }

    svg {
        fill: ${theme.colors.secondary};
        width: 1.3rem;
        margin-left: 0.8rem;

        &:hover {
            fill: ${theme.colors.primary};
        }
    }

    @media (max-width: 850px) {
        font-size: 1.5rem;
    }
`;

const PostDetailContainer = styled.div`
    @media (max-width: 850px) {
        margin-top: -1.5rem;
    }
`;

interface PostDetailProps {
    title: string;
    id: number;
    content: string;
    time: string;
    tags: string[];
}

const DELETE_POST_MUTATION = gql`
  mutation PostsUpdate($id: ID!) {
    postsUpdate(
      data: {
        title: "DELETED"
        content: "DELETED"
        summary: "DELETED"
        status: "DELETED"
      }
      filter: { id: { eq: $id } }
    ) {
      id
    }
  }
`;

const PostDetail: React.FC<PostDetailProps> = ({ title, content, time, tags, id }) => {
    const [owner, setOwner] = useState(false);
    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        onCompleted: (data) => {
            navigate("/");
            window.location.reload();
        },
        onError: (error) => {
            console.error("Mutation error:", error.message);
        },
        context: {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    });
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');

        if (role === "Owner") {
            setOwner(true);
        }
    }, []);

    const handleDelete = () => {
        deletePost({ variables: { id } })
    };

    return (
        <PostDetailContainer>
            <div>
                <PostTitle>
                    <span>{title}</span>
                    {owner && (
                        <div>
                            <a href={`/compose?post_id=${id}`}><IconEdit /></a>
                            <IconDelete onClick={handleDelete} />
                        </div>
                    )}
                </PostTitle>
            </div>
            <PostMarkdownContent>
                <WithSyntaxHighlighter content={content} />
            </PostMarkdownContent>
            <div>
                <TimePostDetail>{time.split(' ')[0]}</TimePostDetail>
                {tags.map((tag: string, index: number) => (
                    <TagPostDetail key={index}>{tag}</TagPostDetail>
                ))}
            </div>
        </PostDetailContainer>
    );
};

export default PostDetail;