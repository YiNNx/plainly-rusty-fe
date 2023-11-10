import React from 'react';
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
        fill: ${theme.colors.grey};
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

const CommentNickname = styled.span`
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

interface CommentListProps {
    comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <CommentsContainer>
            <hr />
            {comments.map((comment) => (
                <CommentItem key={comment.id}>
                    <CommentContent>
                        <div>
                            <CommentNickname>{comment.nickname}</CommentNickname>
                            <TimeComment>{comment.time}</TimeComment>
                            <IconDelete />
                        </div>
                        <div>{comment.content}</div>
                    </CommentContent>
                </CommentItem>
            ))}
        </CommentsContainer>
    );
};


export default CommentList;
