import styled from 'styled-components';
import { theme } from '../../theme';

export const Time = styled.span`
    font-size: 0.875rem;
    color: ${theme.colors.grey};
`;

export const TimeComment = styled(Time)`
    font-size: 0.8rem;
    padding: 0 1rem;
`;

export const TimePostDetail = styled(Time)`
    float: right;
`

export const TimePostItem = styled(Time)`
    @media (max-width: 850px) {
        color:  ${theme.colors.tertiary};
    }
`