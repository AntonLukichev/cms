import React from 'react';
import { render } from '@testing-library/react';
import { PostsPage, PostLink } from '../../pages/posts';

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: 'title 1',
    body: 'body 1',
  },
];

describe('Post Page', () => {
  it('should have PostLink', async () => {
    const { findByTestId } = render(<PostLink item={mockPosts[0]} />);
    const postLink = await findByTestId(`postLink-${mockPosts[0].id}`);
    expect(postLink).toBeInTheDocument();
  });
  it('should have PostPage', async () => {
    const { findByTestId } = render(<PostsPage items={mockPosts} />);
    const postLink = await findByTestId(`postLink-${mockPosts[0].id}`);
    const header = await findByTestId('header');
    const mainLayout = await findByTestId('mainLayout');
    const footer = await findByTestId('footer');
    expect(postLink).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(mainLayout).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
