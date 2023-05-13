// Github API

import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type GitRepo = {
    id: number;
    name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
    },
    html_url: string;
    description: string;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string;
    stargazers_count: number;
    watchers_count: number;
    archived: boolean;
    forks: number;
    topics: string[];
    language: string;
}

export type RawRepo = {
    id: number;
    name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
    },
    html_url: string;
    description: string;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string;
    stargazers_count: number;
    archived: boolean;
    image: string;
    readme: string;
    stats: {
        stars: number;
        forks: number;
        watchers: number;
        topLang: string;
        topics: string[];
    }
}

export type Repo = {
    source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
} & RawRepo;

export default Repo;