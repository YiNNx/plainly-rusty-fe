import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail';

const Post: React.FC = () => {
  const { id } = useParams(); // 通过useParams()获取帖子ID

  const post = {
    id: '1',
    title: '海拉鲁游记',
    content: '# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n---\n\n**This is bold text**\n\n*This is italic text*\n\n~~Strikethrough~~\n\n> Blockquotes\n\nUnordered\n\n- Very easy!\n  - Yeah\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n\n\n## Code\n\nInline `code`\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Test | Test |\n| ---- | ---- |\n| test | test |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n\n',
    tag: 'Programming',
    time: 'November 12, 2023',
  };

  return (
    <PostDetail
      title={post.title}
      id={post.id}
      content={post.content}
      time={post.time}
      tag={post.tag} />
  );
};

export default Post;
