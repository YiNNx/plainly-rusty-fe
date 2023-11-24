import React from 'react';
import BlogList from '../components/Post/List';
import Breadcrumbs from '../components/Util/Breadcrumbs';

const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Posts', to: '/' },
];
const Home: React.FC = () => {
    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />
            <BlogList />
        </div>
    );
};

export default Home;
