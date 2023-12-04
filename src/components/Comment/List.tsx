import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../../models/comment';
import { theme } from '../../theme';
import { ReactComponent as IconDelete } from '../../assets/svg/delete.svg'
import { TimeComment } from '../Util/Time';

const CommentsContainer = styled.div`
    align-items: center;
    h3,strong {
        color: ${theme.colors.primary};
        text-decoration: underline 1px;
        text-underline-offset: .4rem;
    }

    hr {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        border: 0;
        border-top: 2px solid ${theme.colors.lightgrey};
        border-radius: 2px;
    }

    svg{
        float: right;
        fill: ${theme.colors.secondary};
        width: 1rem;
        padding-left: .8rem;

        &:hover{
            fill: ${theme.colors.primary};
        }
    }
`;

const CommentItem = styled.div`
    padding-bottom: .3rem;
    padding: .2rem 1rem;
`;

const CommentNickname = styled.a`
    font-family: JetBrainsMono;
    color: ${theme.colors.tertiary};
    font-size: .9rem;
`;

const CommentContent = styled.p`
    line-height: 1.6rem;
    font-size: .9rem;
    color: ${theme.colors.text};
    margin: .5rem 0;
`;

export const Loading = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: .6rem .8rem 0rem;
    color: ${theme.colors.primary};
`;

interface CommentListProps {
    comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
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
        <CommentsContainer>
            <hr />
            {comments.map((comment) => (
                <CommentItem key={comment.id}>
                    <CommentContent>
                        <div>
                            <CommentNickname target="_blank" href={`https://github.com/${comment.githubName}`}>{comment.githubName}</CommentNickname>
                            <TimeComment>{comment.time.split(' ')[0]}</TimeComment>
                            {owner && <div><IconDelete /></div>}
                        </div>
                        <div>{comment.content}</div>
                    </CommentContent>
                </CommentItem>
            ))}
        </CommentsContainer>
    );
};


export default CommentList;
