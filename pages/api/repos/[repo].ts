import type { NextApiRequest, NextApiResponse } from 'next'
import { GitRepo } from 'interfaces/Repo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const reqQueryStr = req.query.repo as string;
    const reqQuery = reqQueryStr.split(",");

    const repos = [];

    for (const projectName of reqQuery) {
        const repository: GitRepo = await fetch(`https://api.github.com/repos/tygerxqt/${projectName}`, {
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
            }
        }).then((res) => {
            return res.json()
        }).catch((err) => {
            console.error(err);
        });

        const gitReadme: { content: string } = await fetch(`https://api.github.com/repos/tygerxqt/${projectName}/readme`, {
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
            }
        }).then((res) => {
            return res.json()
        }).catch((err) => {
            console.error(err);
        });

        const readmeContent = Buffer.from(gitReadme.content, "base64").toString("utf-8");

        repos.push({
            id: repository.id,
            name: repository.name,
            owner: {
                login: repository.owner.login,
                id: repository.owner.id,
                avatar_url: repository.owner.avatar_url
            },
            html_url: repository.html_url,
            description: repository.description,
            fork: repository.fork,
            created_at: repository.created_at,
            updated_at: repository.updated_at,
            pushed_at: repository.pushed_at,
            homepage: repository.homepage,
            stargazers_count: repository.stargazers_count,
            archived: repository.archived,
            image: `${process.env.NEXT_PUBLIC_URL}/assets/projects/${repository.name}.png`,
            readme: readmeContent,
            stats: {
                stars: repository.stargazers_count,
                watchers: repository.watchers_count,
                forks: repository.forks,
                topics: repository.topics,
                topLang: repository.language
            }
        })
    }

    if (repos.length === 0) return res.status(404).json({ message: "No repositories found." });
    if (repos.length === 1) return res.status(200).json(repos[0]);

    return res.status(200).json(repos);
}