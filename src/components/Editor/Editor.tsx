import React, { useEffect, useState } from "react";
import MdEditor from "for-editor";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { ErrorMessage } from "../Util/Message";

const POSTS_CREATE_ONE = gql`
  mutation PostsCreateOne($title: String!, $content: String!, $summary: String!) {
    postsCreateOne(data: { id: 0, title: $title, content: $content, summary: $summary }) {
      id
    }
  }
`;

const POSTS_UPDATE = gql`
mutation PostsUpdate($title: String!, $content: String!, $summary: String!,$id: Int!) {
    postsUpdate(
        data: { title: $title, content: $content, summary: $summary }
        filter: { id: { eq: $id } }
    ) {
        id
    }
}
`;

const TAGS_QUERY = gql`
query Tags {
    tags {
        nodes {
            id
            name
        }
    }
}
`;

const TAGS_CREATE_ONE = gql`
  mutation TagsCreateOne($name: String!) {
    tagsCreateOne(data: { id: 0, name: $name }) {
      id
      name
    }
  }
`;

const POST_TAGS_CREATE_ONE = gql`
  mutation PostTagsCreateOne($postId: ID!, $tagId: ID!) {
    postTagsCreateOne(data: { postId: $postId, tagId: $tagId }) {
      postId
    }
  }
`;

const GET_POST = gql`
  query Posts($postId: Int!) {
    posts(filters: { id: { eq: $postId }, status: { eq: "PUBLIC" } }) {
      nodes {
        id
        title
        time
        content
        summary
        status
        tags {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;


const DemoEditor: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const post_id = params.get('post_id');


    const navigate = useNavigate();
    const [mdContent, setMdContent] = useState("");

    const { data } = useQuery(GET_POST, {
        variables: { postId: parseInt(post_id || '', 10) },
    });

    useEffect(() => {
        if (data?.posts.nodes.length > 0) {
            const content = data.posts.nodes[0].content + "\n\n";
            const title = "# " + data.posts.nodes[0].title + "\n\n";
            const summary = "> " + data.posts.nodes[0].summary + "\n\n";
            const tags = data.posts.nodes[0].tags.nodes.map((tag: any) => `#${tag.name} `).join("");
            setMdContent(title + summary + content + tags);
        }
    }, [data]);

    const toolbar = {
        expand: true,
        save: true,
        subfield: true,
    };

    const [createPost, { error: createPostError }] =
        useMutation(POSTS_CREATE_ONE, {
            onCompleted: (data) => {
                const postId = data?.postsCreateOne.id;
                navigate(`/post/${postId}`);
            },
            onError: (error) => {
                console.error("Mutation error:", error.message);
            },
            context: {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
        });

    const [updatePost,] =
        useMutation(POSTS_UPDATE, {
            onCompleted: (data) => {
                const postId = data?.postsUpdate[0].id;
                navigate(`/post/${postId}`);
            },
            onError: (error) => {
                console.error("Mutation error:", error.message);
            },
            context: {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
        });

    const { data: tagsData, refetch: refetchTags } = useQuery(TAGS_QUERY);

    function uploadImg(file: any) {
        console.log("file", file);
    }

    function handleEditorChange(value: any) {
        setMdContent(value);
    }


    async function handleEditorSave() {

        const lines = mdContent.replace(/\n+$/, '').split("\n\n");
        const title = lines[0].replace(/^#\s/, "");
        const summaryMatch = /^>\s(.*)/.exec(lines[1]);
        const summary = summaryMatch ? summaryMatch[1] : "";
        const content = lines.slice(2, lines.length - 1).join("\n\n");
        const tags = lines[lines.length - 1].split(' ');

        if (!post_id) {
            const createPostResult = await createPost({
                variables: { title, content, summary },
            });

            const postId = createPostResult.data?.postsCreateOne.id;


            for (const tag of tags) {

                const tagName = tag.substring(1);
                const tagData = tagsData?.tags.nodes.find((node: any) => node.name === tagName);
                let tagId = tagData?.id;



                if (!tagId) {
                    const createTagResult = await createTag(tagName);
                    tagId = createTagResult.data?.tagsCreateOne.id;
                }


                if (postId && tagId) {
                    createPostTag(postId, tagId);
                }
            }


            refetchTags();
        } else {
            const id = parseInt(post_id);
            await updatePost({
                variables: { title, content, summary, id },
            });
        }
        window.location.reload();
    }


    const createTag = async (tagName: string) => {
        return createTagMutation({
            variables: { name: tagName },
        });
    };

    const [createTagMutation] = useMutation(TAGS_CREATE_ONE, {
        context: {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    });


    const createPostTag = (postId: string, tagId: string) => {
        createPostTagMutation({
            variables: { postId, tagId },
        });
    };

    const [createPostTagMutation] = useMutation(POST_TAGS_CREATE_ONE, {
        context: {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        },
    });

    return (
        <div>
            <MdEditor
                placeholder="请输入Markdown文本"
                toolbar={toolbar}
                lineNum={0}
                value={mdContent}
                onChange={handleEditorChange}
                onSave={handleEditorSave}
                addImg={uploadImg}
            />
            {createPostError && <ErrorMessage>Error: {createPostError.message}</ErrorMessage>}
        </div>
    );
};

export default DemoEditor;
