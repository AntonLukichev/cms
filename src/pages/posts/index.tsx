import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import Layout from '../../layouts';

interface PostItem {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  items: Array<PostItem>;
}

const PostsPage: NextPage<PostsPageProps> = ({ items }) => {
  return (
    <Layout>
      {items.map((item: PostItem) => (
        <div>
          {item.title}
        </div>
      ))}
    </Layout>
  );
};

// eslint-disable-next-line @typescript-eslint/unbound-method
PostsPage.getInitialProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();


  return {
    items: data,
  };
};

export default PostsPage;
