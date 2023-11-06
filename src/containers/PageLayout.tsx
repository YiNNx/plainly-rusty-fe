import styled from 'styled-components';
import React, { PropsWithChildren } from 'react';

const Container = styled.div`
  padding: 1rem 3rem; 
`;

const PageLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default PageLayout;
