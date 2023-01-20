import { getAllPosts } from './lib/posts';
import Link from 'next/link';

export default function Blog({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.slug}>
                    <Link href="/blog/[slug]" as={`/blog/${post.slug}`} legacyBehavior={true}>
                        <a>{post.title}</a>
                    </Link>

                </li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts();
    return { props: { posts } }
}
