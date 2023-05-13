import type { NextApiRequest, NextApiResponse } from 'next'
import Repo, { GitRepo } from 'interfaces/Repo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let git: GitRepo[] = await fetch('https://api.github.com/users/tygerxqt/repos', {
        headers: {
            "Authorization": `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        }
    }).then((res) => {
        return res.json()
    }).catch((err) => {
        return res.status(500).json({ message: err })
    });

    git = git.filter((repo) => repo.name !== "tygerxqt");

    let promises: Promise<Repo>[] = git.map(async (repo) => {
        let url = `${process.env.NEXT_PUBLIC_URL}/api/repos/${repo.name}`;
        return await fetch(url)
            .then((res) => { return res.json() })
            .catch((err) => { console.error(err) });
    });

    let repos = [];

    for await (const repo of promises) {
        repos.push(repo);
    }

    return res.status(200).json(repos);
}