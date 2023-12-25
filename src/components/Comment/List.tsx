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

const CommentAvatar = styled.img`
    margin-top: .5rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    /* border: 1px solid rgba(31,35,40,0.15); */
    padding: .125rem;
    vertical-align: middle;
    margin-right: .8rem;

    @media (max-width: 850px) {
        margin-right: .6rem;
    }
`;

const CommentItem = styled.div`
    padding-bottom: .3rem;
    padding: .25rem .125rem;
    display: flex;
    align-items: flex-start;  /* Align items to the start of the cross axis (top) */
    margin: .5rem 0;

    @media (max-width: 850px) {
        padding: .25rem 0;
    }
`;

const CommentNickname = styled.a`
    /* font-family: JetBrainsMono; */
    font-weight: bold;
    color: ${theme.colors.tertiary};
    font-size: .95rem;
`;

const CommentContent = styled.div`
    line-height: 1.6rem;
    font-size: .925rem;
    color: ${theme.colors.text};
    padding: .1rem 0;

    span.mention {
        color: ${theme.colors.secondary};
        font-weight: bold;
    }
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
                    <a href={`https://github.com/${comment.githubName}`}>
                        <CommentAvatar src={comment.avatar} alt="" />
                    </a>
                    <CommentContent>
                        <div>
                            <CommentNickname target="_blank" href={`https://github.com/${comment.githubName}`}>{comment.githubName}</CommentNickname>
                            <TimeComment>{comment.time.split(' ')[0]}</TimeComment>
                            {/* {owner && <div><IconDelete /></div>} */}
                        </div>
                        <div>
                            {comment.content.split(/(@\w+)/g).map((part, index) => (
                                part.startsWith('@') ? <span key={index} className="mention">{part}</span> : part
                            ))}
                        </div>
                    </CommentContent>
                </CommentItem>
            ))}
        </CommentsContainer>
    );
};


export default CommentList;
