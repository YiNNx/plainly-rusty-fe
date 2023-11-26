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
        font-size: 1.4rem;
    }
`;

const PostContent = styled.p`
    line-height: 1.7rem;
    font-size: 1.05rem;
    color: ${theme.colors.text};
    margin: .8rem 0 .7rem 0;
    text-align: justify;

    @media (max-width: 850px) {
        margin: .4rem 0 .5rem 0;
    }
`;

const PostItemContainer = styled.div`
    padding: 0rem 1.7rem;
    margin: 1rem 0 3.2rem 0;
    border-left: 2.5px solid ${theme.colors.secondary};

    text-align: left;

    &:hover {
        /* border-left: 2px solid ${theme.colors.secondary}; */
        /* ${PostTitle} {
            text-decoration: underline 1px;
            text-underline-offset: .4rem;
            text-decoration-color:  ${theme.colors.tertiary};
        } */
    }

    @media (max-width: 850px) {
        padding: 0;
        margin: .8rem 0 1.8rem;
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
    summary: string;
    time: string;
}


const PostItem: React.FC<PostItemProps> = ({ title, summary, id, tags, time }) => {
    return (
        <PostItemContainer>
            <Link to={`/post/${id}`}>
                <ResponsiveForPC>
                    <PostTitle>{title}</PostTitle>
                    {tags.map((tag: any, index: any) => (
                        <TagPostItem key={index}>{tag}</TagPostItem>
                    ))}
                </ResponsiveForPC>
                <PostContent>{summary}</PostContent>
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
