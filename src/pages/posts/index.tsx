import React, { FC } from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../../layouts';

interface PostItem {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  items: PostItem[];
}

const PostLink: FC<{item: PostItem}> = ({ item }) => (
  <div>
    <Link href="/posts/[id]" as={`/posts/${item.id}`} key={item.id}>
      <a>{item.title}</a>
    </Link>
  </div>
);

const PostsPage: NextPage<PostsPageProps> = ({ items }) => (
  <Layout>
    {items.map((item: PostItem) => (
      <PostLink item={item} key={item.id} />
    ))}
  </Layout>
);

// eslint-disable-next-line
PostsPage.getInitialProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    items: data,
  };
};

export default PostsPage;
