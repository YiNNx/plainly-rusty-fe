import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';
import { TimePostItem } from '../Util/Time';
import { TagPostItem } from '../Util/Tag';

const PostTitle = styled.span`
    font-family: SourceHanSerifCN;
    color: ${theme.colors.primary};
    font-size: 1.7rem;
    font-weight: bold;

    @media (max-width: 850px) {
        color:  ${theme.colors.primary};
    }
`;

const PostContent = styled.p`
    line-height: 1.7rem;
    font-size: 1.05rem;
    color: ${theme.colors.text};
    margin: .8rem 0 .7rem 0;
`;

const PostItemContainer = styled.div`
    padding: 0rem 1.7rem;
    margin: 2rem 0 2.8rem 0;
    border-left: 2.5px solid ${theme.colors.secondary};

    &:hover {
        /* border-left: 2px solid ${theme.colors.secondary}; */
        /* ${PostTitle} {
            color: ${theme.colors.tertiary};
        } */
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
    tags: string[];
    content: string;
    time: string;
}


const PostItem: React.FC<PostItemProps> = ({ title, content, id, tags, time }) => {
    return (
        <PostItemContainer>
            <Link to={`/post/${id}`}>
                <ResponsiveForPC>
                    <PostTitle>{title}</PostTitle>
                    {tags.map((tag: any, index: any) => (
                        <TagPostItem key={index}>{tag}</TagPostItem>
                    ))}
                </ResponsiveForPC>
                <PostContent>{content}</PostContent>
                <ResponsiveForMobile>
                    <TimePostItem>{time.split(' ')[0]}</TimePostItem>
                    {tags.map((tag: any, index: any) => (
                        <TagPostItem key={index}>{tag}</TagPostItem>
                    ))}
                </ResponsiveForMobile>
            </Link>
        </PostItemContainer>
    );
};

export default PostItem;
