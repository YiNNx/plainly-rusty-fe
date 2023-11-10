import styled from 'styled-components';

export const PostContainer = styled.div`
    margin: 2rem 1rem 3rem 2rem;
    max-width: 51vw;
    
    @media (max-width: 850px) {
        margin: 2rem;
        max-width: none;
    }
`;

export const PostCommentContainer = styled.div`
    margin: 4rem 0;
`;

export const EditorContainer = styled.div`
    width: 60vw;
    @media (max-width: 850px) {
        position: fixed;
        top: 5rem;
        left: 5vw;
        width: 90vw;
    }
`