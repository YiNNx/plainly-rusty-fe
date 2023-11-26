import styled from 'styled-components';
import { theme } from '../../theme';

const Tag = styled.span`
    background-color: ${theme.colors.block};
    color: ${theme.colors.primary};
    padding: 0.2rem 0.7rem;
    border-radius: 2rem;
    font-size: .9rem;
`;

export const TagPostItem = styled(Tag)`
    float: right;
    margin: 0.375rem .2rem;
    padding: 0.25rem 0.7rem;
    
    @media (max-width: 850px) {
        color: ${theme.colors.secondary};
        margin: 0;
        padding: 0.2rem 0.7rem;
    }
`;

export const TagPostDetail = styled(Tag)`
`;