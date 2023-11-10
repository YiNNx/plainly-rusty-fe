import React from 'react';
import Editor from '../components/Editor/Editor';
import { EditorContainer } from '../containers/Cantainers';


const Compose: React.FC = () => {
    return (
        <EditorContainer>
            <Editor />
        </EditorContainer>
    );
};
export default Compose;
