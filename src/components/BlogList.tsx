import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostListContainer = styled.div`
`;

const BlogList: React.FC = () => {
    // Replace this with your actual blog data
    const blogData = [
        { title: 'Sample Blog Post 1', content: 'This is the content of the first blog post.', id: '1' },
        { title: 'Sample Blog Post 2', content: 'This is the content of the second blog post.', id: '2' },
        // Add more blog posts as needed
    ];

    return (
        <PostListContainer>
            {blogData.map((post, index) => (
                <Post key={index} title={post.title} content={post.content} id={post.id} />
            ))}
        </PostListContainer>
    );
};

export default BlogList;
