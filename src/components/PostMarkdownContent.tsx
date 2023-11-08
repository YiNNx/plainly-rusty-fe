import { theme } from '../theme';
import styled from 'styled-components';

const PostMarkdownContent = styled.div`
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
    color: ${theme.colors.primary};
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
    padding-top: 0.9rem;
    margin-bottom: 2.3rem;
  }
  
  h2 {
    font-size: 1.25rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
    padding: 1px 12.5px;
    border-radius: 4px;
    display: inline-block;
    margin: .3em 0;
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
    background-color: ${theme.colors.primary};
  }

  h3 {
    font-size: 1.125rem;
    margin: 1em 0 1em;
  }

  h4,h5,h6 {
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
    border-left: 3px solid ${theme.colors.primary};
    padding: 15px 30px 15px 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    background: ${theme.colors.block};
}

code {
    color: ${theme.colors.primary};
    font-size: 94%;
    font-weight: normal;
    word-wrap: break-word;
    padding: 2px 4px 2px;
    border-radius: 3px;
    margin: 2px;
    background-color: ${theme.colors.block};
    font-family: 'JetBrainsMono';
    word-break: break-all;
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

export default PostMarkdownContent;