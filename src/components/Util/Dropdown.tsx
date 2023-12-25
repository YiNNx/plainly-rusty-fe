import styled from 'styled-components';
import { theme } from '../../theme';

export const DropdownContainer = styled.div`
    position: fixed;
    bottom: 5rem;
`;

export const DropdownButton = styled.button`
    outline: none;
    padding: 0;
    font-size: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const DropdownList = styled.ul`
    min-width: 8rem;
    position: absolute; 
    top: auto;
    bottom: 100%;
    left: 0;
    margin-bottom: 2rem;
    padding: 0;
    list-style: none;
    background-color: #fff;
    box-shadow: 0 2px 6px ${theme.colors.shadow};
    border-radius: 1rem;
    z-index: 0;
`;

export const EditList = styled(DropdownList)`
    position: fixed;
    bottom: 60vh;
    left: 60vw;

    padding: .5rem 0;
    @media (max-width: 850px) {
        bottom: 67vh;
        left: 58vw;
    }
`

export const DropdownItem = styled.li`
    margin: 0 1rem;
    font-size: 0.875rem;
    color: #333;
    cursor: pointer;
    font-family: Cantarell;
    font-weight: normal;
    padding: .4rem 0;

    &:hover {
        color: ${theme.colors.primary};
        text-decoration: underline 1px;
        text-underline-offset: .2rem;
    }
`;