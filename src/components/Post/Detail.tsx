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
import { DropdownButton, DropdownItem, EditList } from '../Util/Dropdown';

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

const Dropdown = styled.div`
    position: relative;
`;

interface PostDetailProps {
    title: string;
    id: number;
    content: string;
    time: string;
    tags: string[];
}

const DELETE_POST_MUTATION = gql`
  mutation PostsDelete($id: ID!) {
    postTagsDelete(filter: { postId: { eq: $id }})
    postsDelete(filter: { id: { eq: $id } })
}
`;

const PUBLICIZE_POST_MUTATION = gql`
  mutation PostsUpdate($id: ID!) {
    postsUpdate(data: { status: "PUBLIC" }, filter: { id: { eq: $id } }) {
        id
    }
}
`;

const HIDE_POST_MUTATION = gql`
  mutation PostsUpdate($id: ID!) {
    postsUpdate(data: { status: "PRIVATE" }, filter: { id: { eq: $id } }) {
        id
    }
}
`;

const PostDetail: React.FC<PostDetailProps> = ({ title, content, time, tags, id }) => {
    const [owner, setOwner] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        // 监听
        window.addEventListener('scroll', handleScroll)
        // 销毁
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    let lastScrollTop = 0;
    const handleScroll = () => {
        let clientHeight = document.documentElement.clientHeight //可视区域高度
        let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        // console.log("scrollTop", scrollTop, 'lastScrollY', lastScrollTop, 'clientHeight', clientHeight, 'scrollHeight', scrollHeight);
        if (scrollTop > lastScrollTop) {
            setIsOpen(false)
        } 
        lastScrollTop = document.documentElement.scrollTop
        // 判断是否滚动到底部
        if (scrollTop + clientHeight === scrollHeight) {
        }
    }
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
    const [publicizePost] = useMutation(PUBLICIZE_POST_MUTATION, {
        onCompleted: (data) => {
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
    const [hidePost] = useMutation(HIDE_POST_MUTATION, {
        onCompleted: (data) => {
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
        // Display a confirmation dialog before proceeding with deletion
        const shouldDelete = window.confirm('Are you sure you want to delete this post?');

        if (shouldDelete) {
            deletePost({ variables: { id } });
        }
    };

    let options = ['Edit','Publicize','Hide'];
    const handleOptions = (option: string) => {
        setIsOpen(false);
        if (option === 'Edit') {
            navigate(`/compose?post_id=${id}`);  
        } else if (option === 'Publicize') {
            publicizePost({ variables: { id } });
        } else if (option === 'Hide'){
            hidePost({ variables: { id } });
        }
    };

    return (
        <PostDetailContainer>
            <div>
                <PostTitle>
                    <span>{title}</span>
                    {owner && (
                        <Dropdown>
                                <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                                    <IconEdit />
                                </DropdownButton>
                                {isOpen && (
                                    <EditList>
                                        {options.map((option) => (
                                            <DropdownItem key={option} onClick={() => handleOptions(option)}>
                                                {option}
                                            </DropdownItem>
                                        ))}
                                    </EditList>
                                )}
                            <IconDelete onClick={handleDelete} />
                        </Dropdown>
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