import { theme } from '../theme';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';

export const PostMarkdownContent = styled.div`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-bottom: 5rem;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
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
        border-bottom: 1px solid ${theme.colors.primary};
        margin: 2px;
        text-decoration: none;
        word-wrap: break-word;
  }

  strong {
    color: ${theme.colors.tertiary};
  }

  mark {
    background: ${theme.colors.highlight};
    padding: 1px .15rem;
    border-radius: 1px;
    color: inherit;
}

  h1,h2,h3,h4,h5,h6 {
    color: ${theme.colors.primary};
    padding: 0px;
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
    padding: 0px 8px;
    /* border-radius: 8px; */
    display: inline-block;
    margin: .8rem 0;
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
  }

  h3 {
    line-height: 1.2;
    font-size: 1.1rem;
    margin: 1.8rem 0 1rem;
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
}

ul, ol {
    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 20px;
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
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 1.7rem;
    text-align: justify;
    color: ${theme.colors.text};
    font-weight: 500;
}

blockquote {
    display: block;
    font-size: .9em;
    overflow: auto;
    border-left: 3px solid ${theme.colors.secondary};
    padding: 15px 30px 15px 20px;
    margin: 20px 0;
    background: ${theme.colors.block};
}

code {
    font-size: .8rem;
    font-family: 'JetBrainsMono';
}


img {
    max-width: 20rem;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 2px solid #eef2f5;
    border-radius: 2px;
}
`;

export const WithSyntaxHighlighter = ({ content }: { content: any }) => {
  return (
    <ReactMarkdown components={{
      code({ node, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            // @ts-ignore
            style={nord}
            language={match[1]}
            customStyle={{
              // background: "#f6f8fa",
              // lineHeight: "1rem",
              borderRadius: ".4rem",
            }}
            // showLineNumbers={true}
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
    }}>
      {content}
    </ReactMarkdown>
  );
};

