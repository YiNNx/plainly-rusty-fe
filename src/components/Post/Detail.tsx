import React from 'react';
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
`;

interface PostDetailProps {
    title: string;
    id: string;
    content: string;
    time: string;
    tag: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ title, content, time, tag, id }) => {
    return (
        <div>
            <div>
                <PostTitle>
                    <span>{title}</span>
                    <IconEdit /><IconDelete />
                </PostTitle>
            </div>
            <PostMarkdownContent>
                <WithSyntaxHighlighter content={content} />
            </PostMarkdownContent>
            <div>
                <TagPostDetail>{tag}</TagPostDetail>
                <TimePostDetail>{time.split(' ')[0]}</TimePostDetail>
            </div>
        </div>
    );
};

export default PostDetail;
