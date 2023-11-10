import styled from 'styled-components';
import { theme } from '../../theme';

const Tag = styled.span`
    background-color: ${theme.colors.block};
    color: ${theme.colors.primary};
    padding: 0.15rem 0.75rem;
    border-radius: 2rem;
    font-size: .9rem;
`;

export const TagPostItem = styled(Tag)`
    float: right;
    font-size: 0.8125rem;
    margin: 0.375rem 0;
    
    @media (max-width: 850px) {
        margin: 0.1rem 0;
        color: ${theme.colors.secondary};
    }
`;

export const TagPostDetail = styled(Tag)`
`;