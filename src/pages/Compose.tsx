import React from 'react';
import styled from 'styled-components';
import Editor from '../components/Editor';

const EditorContainer = styled.div`
    width: 60vw;
`

const Compose: React.FC = () => {
    return (
        <EditorContainer>
            <Editor />
        </EditorContainer>
    );
};
export default Compose;
