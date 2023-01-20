import { getAllPosts, getPostBySlug } from '../lib/posts';

export default function Blog({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const posts = getAllPosts();
    const paths = posts.map((post) => `/blog/${post.slug}`);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug);
    return { props: { post } };
}

