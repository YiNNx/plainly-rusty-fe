import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { PostMarkdownContent, WithSyntaxHighlighter } from './Markdown';
import { ReactComponent as IconEdit } from '../../assets/svg/edit.svg'
import { ReactComponent as IconDelete } from '../../assets/svg/delete.svg'
import { TagPostDetail } from '../Util/Tag';
import { TimePostDetail } from '../Util/Time';

const PostTitle = styled.h2`
    font-family: 'SourceHanSerifCN';
    font-size: 1.9rem;
    color: ${theme.colors.primary};
    margin: 0 0 .6rem 0;
    display: flex;
    text-align: left;

    align-items: center; /* Center align items vertically */

    span {
        flex: 1; /* Take up remaining space */
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
    id: string;
    content: string;
    time: string;
    tags: string[];
}

const PostDetail: React.FC<PostDetailProps> = ({ title, content, time, tags, id }) => {
    const [owner, setOwner] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem('role');

        if (role) {
            if (role === "Owner") {
                setOwner(true);
            }
        }
    }, []);
    return (
        <PostDetailContainer>
            <div>
                <PostTitle>
                    <span>{title}</span>
                    {owner && <div><a href={`/compose?post_id=${id}`} ><IconEdit /></a><IconDelete /></div>}
                </PostTitle>
            </div>
            <PostMarkdownContent>
                <WithSyntaxHighlighter content={content} />
            </PostMarkdownContent>
            <div>
                <TimePostDetail>{time.split(' ')[0]}</TimePostDetail>
                {tags.map((tag: any, index: any) => (
                    <TagPostDetail key={index}>{tag}</TagPostDetail>
                ))}
            </div>
        </PostDetailContainer>
    );
};

export default PostDetail;
