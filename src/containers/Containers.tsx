import styled from 'styled-components';
import { theme } from '../theme';

export const PostContainer = styled.div`
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    animation: fadeIn .3s ease-in-out;
    max-width: 51vw;
    
    @media (max-width: 850px) {
        margin: 2rem;
        max-width: none;
    }
`;

export const PostCommentContainer = styled.div`
    margin: 3rem 0;
`;

export const EditorContainer = styled.div`
    .for-container textarea, .for-container{
      font-family: SourceHanSerifCN;
    }

    width: 60vw;
    @media (max-width: 850px) {
        position: fixed;
        top: 5rem;
        left: 5vw;
        width: 90vw;
    }

    .for-container .for-markdown-preview {
      font-size: 1rem;
    color: ${theme.colors.text};
    margin-bottom: 1.5rem;
    line-height: 1.6;
    word-spacing: 0;
    letter-spacing: 0;
    word-break: break-word;
    word-wrap: break-word;

    p {
        padding-top: .2rem;
        padding-bottom: .2rem;
        margin: 0;
        line-height: 1.8rem;
        color: inherit;
    }

    a {
        color: ${theme.colors.primary};
        text-decoration: underline 1px;
        text-underline-offset: .4rem;
        word-wrap: break-word;
        padding: 0 .2rem;
    }

    strong {
        color: ${theme.colors.primary};
        font-family: SourceHanSerifCN;
    }

    mark {
        background: ${theme.colors.highlight};
        padding: 1px .15rem;
        color: inherit;
    }

    h1,h2,h3,h4,h5,h6 {
        color: ${theme.colors.primary};
        font-family: 'SourceHanSerifCN';
        padding: 0;
    }

    h1 {
        font-size: 1.8rem;
        color: ${theme.colors.primary};
        border-bottom: none;
    }
    
    h2 {
        line-height: 1.5;
        font-size: 1.25rem;
        background-image: linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.primary});
        color: ${theme.colors.background};
        padding: .125rem .7rem;
        border-radius: 2px;
        display: inline-block;
        margin: 1rem 0;
        /* border-left: 4px solid #4870ac; */
    }

    h2 a {
        text-decoration: underline;
        color: ${theme.colors.background};
        border-bottom: 0;
        text-decoration-thickness: 1.2px;
        text-underline-offset: 2px;
    }

    h2 strong {
        color: ${theme.colors.background};
    }

    h2 code {
        color: ${theme.colors.background};
        background-color: transparent;
    }

    h3 {
        line-height: 1.2;
        font-size: 1.1rem;
        margin: .8rem 0;
        border-left: 3px solid ${theme.colors.tertiary};
        padding: 0.1rem 0.7rem 0.1rem 0.7rem;
    }

    h4,h5,h6 {
        color: ${theme.colors.tertiary};
        font-size: 1rem;
        margin: 0.8em 0 0.8em;
    }

    li {
        margin: 0.4rem 0;
        line-height: 1.6rem;
    }

    ul, ol {
        margin-top: .5rem;
        margin-bottom: .5rem;
        padding-left: 1.25rem;
    }

    ::marker {
        font-weight: bold;
        color: ${theme.colors.secondary};
    }


    ul {
        list-style-type: disc;
    }

    em {
        padding: 0 3px 0 0;
    }

    ul ul {
        list-style-type: square;
    }

    ol {
        list-style-type: decimal;
    }

    li section {
        margin-top: .3rem;
        margin-bottom: .3rem;
        line-height: 1.7rem;
        text-align: justify;
        color: ${theme.colors.text};
        font-weight: 500;
    }

    blockquote {
        display: block;
        overflow: auto;
        border-left: 3px solid ${theme.colors.primary};
        padding: 0.9rem 1.875rem .9rem 1.25rem;
        margin: 1.25rem 0;
        background: ${theme.colors.block};
    }

    code {
        font-family: 'JetBrainsMono';
        color: ${theme.colors.primary};
        font-size: 94%;
        font-weight: normal;
        word-wrap: break-word;
        padding: 2px 4px 2px;
        border-radius: 3px;
        margin: 2px;
        background-color: ${theme.colors.block};
        word-break: break-all;
    }

    pre code {
        font-size: .8rem;
        font-family: 'JetBrainsMono';
    }

    pre {
    padding: 0;
    }

    img {
        max-width: 100%;
        margin: 1rem auto;
        display: block;
    }

    hr {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        border: 0;
        border-top: 2px solid #eef2f5;
        border-radius: 2px;
    }

    table {
        display: table;
        text-align: justify;
        overflow-x: auto;
        border-collapse: collapse;
        border-spacing: 0px;
        font-size: .9rem;
        margin: .8rem .8rem 1.4rem .8rem;
    }

    table tr {
        border: 0;
        border-top: 1px solid #ccc;
    }

    table tr th,
    table tr td {
        border: 1px solid #d9dfe4;
        padding: .4rem 1rem;
        text-align: justify;
    }

    table tr th {
        font-family: SourceHanSerifCN;
        text-align: center;
        font-weight: bold;
        color: ${theme.colors.primary};
    }

    table td {
        min-width: 32px;
    }
    }

`