// Fetch post content
import { getPosts, getPostBySlug } from '../lib/posts';

// Creating pages for each post
export async function getStaticPaths() {
    const posts = await getPosts();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
    const { slug } = params;
    const data = await getPostBySlug(slug);
    return { props: { data } };
}

export default function Post({ data }) {
    return (
        <article className={styles.article}>
            <h1>{data.title}</h1>
            <div>
                {data.tags.map((tag) => (
                    <span key={tag.id}>#{tag.name}</span>
                ))}
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: data.html }} />
        </article>
    );
}