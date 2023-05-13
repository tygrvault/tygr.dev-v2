import { allPosts } from 'contentlayer/generated';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const target = allPosts.find((post) => post.slug === req.query.slug);
    if (!target) return res.status(404).json({ message: 'Not found' });

    if (req.query.code === 'true') {
        return res.status(200).json(target);
    }

    return res.status(200).json({
        ...target,
        body: {
            ...target.body,
            code: undefined as any,
        },
    });
}