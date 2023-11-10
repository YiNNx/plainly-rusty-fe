import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';
import { TimePostItem } from '../Util/Time';
import { TagPostItem } from '../Util/Tag';

const PostTitle = styled.span`
    font-family: SourceHanSerifCN;
    color: ${theme.colors.tertiary};
    font-size: 1.35rem;
    font-weight: bold;

    @media (max-width: 850px) {
        color:  ${theme.colors.primary};
    }
`;

const PostContent = styled.p`
    line-height: 1.6rem;
    font-size: 1rem;
    color: ${theme.colors.text};
    margin: .4rem 0 .6rem 0;
`;

const PostItemContainer = styled.div`
    padding: 0rem 1.7rem;
    margin: 3rem 1rem 3rem 2rem;
    border-left: 2px solid ${theme.colors.secondary};

    &:hover {
        border-left: 2px solid ${theme.colors.tertiary};
        ${PostTitle} {
            color: ${theme.colors.primary};
        }
    }

    @media (max-width: 850px) {
        margin: 2.75rem 1.5rem;
        padding: 0rem 1.1rem;
        border-left: none;

        &:hover {
            border-left: none;
        }
    }
`;

const ResponsiveForPC = styled.div`
    @media (max-width: 850px) {
        ${TagPostItem} {
            visibility: hidden;
        }
    }
`;

const ResponsiveForMobile = styled.div`
    ${TagPostItem} {
        visibility: hidden;
    }

    @media (max-width: 850px) {
        ${TagPostItem} {
            visibility: visible;
        }
    }
`;

interface PostItemProps {
    title: string;
    id: string;
    tag: string;
    content: string;
    time: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, content, id, tag, time }) => {
    return (
        <PostItemContainer>
            <Link to={`/post/${id}`}>
                <ResponsiveForPC>
                    <PostTitle>{title}</PostTitle>
                    <TagPostItem>{tag}</TagPostItem>
                </ResponsiveForPC>
                <PostContent>{content}</PostContent>
                <ResponsiveForMobile>
                    <TimePostItem>{time}</TimePostItem>
                    <TagPostItem>{tag}</TagPostItem>
                </ResponsiveForMobile>
            </Link>
        </PostItemContainer>
    );
};

export default PostItem;
