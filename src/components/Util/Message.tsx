import styled from "styled-components";
import { theme } from "../../theme";

const Message = styled.code`
    background-color: ${theme.colors.background};
    padding: .6rem .8rem;
    font-size: .9rem;
    border-radius: .8rem;
    position: fixed;    
    min-width: 20vw;
    top: 1.5rem;
    text-align: center;
    background-color: white;
    padding: 1rem 1.2rem;
    box-shadow: 0px 2px 5px #c8d2e1d3;

    @media (max-width: 850px) {
        right: 22vw;
        left: 22vw;
        top: 80vh;
    }
`;

export const ErrorMessage = styled(Message)`
    @keyframes slideInAndOut {
        0% {
            transform: translateY(-2rem);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    animation: slideInAndOut 1s ease-in-out 1;

    color: #8d2727;
    right: 30vw;
    left: 30vw;

    @media (max-width: 850px) {
        right: 10vw;
        left: 10vw;
    }
`

export const SuccessMessage = styled(Message)`
    @keyframes slideInAndOut {
        0%, 100% {
            transform: translateY(-1.5rem);
            opacity: 0;
        }
        20%,90% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    animation: slideInAndOut 1.6s ease-in-out 1;
    color: ${theme.colors.tertiary};
    right: 45vw;
    left: 35vw;

    @media (max-width: 850px) {
        right: 20vw;
        left: 20vw;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.background};
        box-shadow: 0;
        @keyframes slideInAndOut {
            0% {
                opacity: 0;
            }
            30%,100% {
                opacity: 1;
            }
        }
    }
`
