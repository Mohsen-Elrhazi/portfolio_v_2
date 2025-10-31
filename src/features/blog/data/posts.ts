export type PostMetadata = {
    title: string;
    description?: string;
    createdAt: string | Date;
};

export type Post = {
    slug: string;
    metadata: PostMetadata;
};

/**
 * Returns all blog posts.
 * Stubbed to an empty list until blog content is added.
 */
export function getAllPosts(): Post[] {
    return [];
}
