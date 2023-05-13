import { allPosts } from 'contentlayer/generated';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let posts = allPosts;

    if (req.query.code !== 'true') {
        posts = posts.map((post) => ({
            ...post,
            body: {
                ...post.body,
                code: undefined as any,
            },
        }));
    }

    if (req.query.archived === 'true') {
        posts = posts.filter((post) => post.archived === true);
    } else {
        posts = posts.filter((post) => post.archived === false);
    }

    return res.status(200).json(posts);
}