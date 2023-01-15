// JavaScript Ghost Content API helper
import GhostContentAPI from "@tryghost/content-api";

// import { getPosts } from '../lib/posts';


// Create API instance with site credentials
const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: "v5.0"
});

// Exposing content
export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}

// Rendering post content
export async function getPostBySlug(slug) {
    return api.posts.read(
        { slug },
        { formats: ['html'], include: 'tags' }
    );
}