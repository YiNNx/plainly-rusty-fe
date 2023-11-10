import { theme } from '../../theme';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const PostMarkdownContent = styled.div`
    font-size: 1rem;
    color: ${theme.colors.text};
    margin-bottom: 5rem;
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
        color: ${theme.colors.text};
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
        font-size: 1.5rem;
        color: ${theme.colors.primary};
    }
    
    h2 {
        line-height: 1.5;
        font-size: 1.25rem;
        background-image: linear-gradient(45deg, ${theme.colors.secondary}, ${theme.colors.primary});
        transition: ${theme.colors.secondary} 0.2s ease-out 0s, ${theme.colors.primary} 0.2s ease-in-out 0s;
        color: ${theme.colors.background};
        padding: 0 .5rem;
        /* border-radius: 8px; */
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
        border-left: 3px solid ${theme.colors.secondary};
        padding: 0 0.7rem;
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
        border-left: 3px solid ${theme.colors.secondary};
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
    padding: .1rem 0;
    }

    img {
        max-width: 20rem;
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

    @media (max-width: 850px) {
    h2 {
        font-size: 1.2rem;
        margin: 1rem 0;
    }
    }
`;

export const WithSyntaxHighlighter = ({ content }: { content: any }) => {
    return (
        <ReactMarkdown
            components={{
                code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            // @ts-ignore
                            style={nord}
                            language={match[1]}
                            customStyle={{
                                borderRadius: ".4rem",
                            }}
                            PreTag="div" {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
            remarkPlugins={[remarkGfm]}
        >
            {content}
        </ReactMarkdown>
    );
};

