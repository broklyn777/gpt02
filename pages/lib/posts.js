

export const getAllPosts = () => [
    {
        slug: 'first-post',
        title: 'My first post',
        content: 'This is the content of my first post',
    },
    {
        slug: 'second-post',
        title: 'My second post',
        content: 'This is the content of my second post',
    },
];

export const getPostBySlug = (slug) => getAllPosts().find((post) => post.slug === slug);
