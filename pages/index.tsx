import { Text, Image, Spacer, Button, Link, useTheme, Grid } from "@nextui-org/react";
import RootLayout from "layouts/RootLayout";
import { Box } from "components/UI/Box";
import { AiFillGithub, AiFillMail, AiFillYoutube, AiOutlineArrowRight, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import ProjectCard from "components/Projects/Card";
import Head from "next/head";
import Repo, { RawRepo } from "interfaces/Repo";
import ExternalLink from "components/UI/ExternalLink";
import { serialize } from "next-mdx-remote/serialize";

export default function HomeRoute({ projects }: { projects: Repo[] }) {
    const { isDark } = useTheme();

    return (
        <>
            <RootLayout>
                <Head>
                    <title>tygr.dev</title>
                    <meta name="title" content="tygr.dev" />
                    <meta name="keywords" content="tygr.dev, tygrdev, tygerxqt, tygerxqt website" />
                    <meta
                        name="description"
                        content="A professional idiot."
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://tygr.dev" />
                    <meta property="og:title" content="tygr.dev" />
                    <meta
                        property="og:description"
                        content="A professional idiot."
                    />
                    <meta property="og:image" content="https://i.imgur.com/fW9phFJ.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://tygr.dev/" />
                    <meta property="twitter:title" content="tygr.dev" />
                    <meta
                        property="twitter:description"
                        content="A professional idiot."
                    />
                    <meta
                        property="twitter:image"
                        content="https://i.imgur.com/fW9phFJ.png"
                    />
                </Head>
                <Box css={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    py: "10rem",
                    "@sm": {
                        gap: "1rem",
                        justifyContent: "space-between",
                    }
                }}>
                    <Box css={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        "@xs": {
                            alignItems: "flex-start",
                        }
                    }}>
                        <Text weight="semibold" color={"#888"} css={{
                            margin: "0",
                            fontSize: "$xl",
                            "@xs": {
                                fontSize: "$2xl",
                            }
                        }}>
                            tygerxqt • they/him
                        </Text>
                        <Text weight="extrabold" css={{
                            margin: "0",
                            lineHeight: "1",
                            pb: "1rem",
                            fontSize: "$4xl",
                            "@xs": {
                                fontSize: "$6xl",
                            },
                        }}>
                            A professional idiot.
                        </Text>

                        <Text weight="bold" color={"#888"} css={{
                            margin: "0",
                            lineHeight: "1.2",
                            fontSize: "$xl",
                            "@xs": {
                                fontSize: "$3xl",
                            },
                        }}>
                            Founder of Nord Studio & Lofu Studio.
                        </Text>

                        <Spacer y={1.5} />

                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "1rem",
                        }}>
                            <ExternalLink href="https://github.com/tygerxqt">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiFillGithub />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    GitHub
                                </Button>
                            </ExternalLink>
                            <ExternalLink href="https://twitter.com/tygerxqt">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiOutlineTwitter />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    Twitter
                                </Button>
                            </ExternalLink>
                            <ExternalLink href="mailto:tygerxqt@nordstud.io">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiFillMail />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    Email
                                </Button>
                            </ExternalLink>
                        </Box>
                    </Box>

                    <Box>
                        <Image src="https://secure.gravatar.com/avatar/871c2885d0acbbc08be33547816255e3?size=512" alt="avatar" css={{
                            borderRadius: "50%",
                            border: "2px solid #888",
                            display: "none",
                            width: "512px",
                            height: "512px",
                            "@sm": {
                                display: "block",
                                width: "320px",
                                height: "320px",
                            },
                            "@md": {
                                width: "384px",
                                height: "384px",
                            },
                            "@lg": {
                                width: "448px",
                                height: "448px",
                            },
                        }} />
                    </Box>
                </Box>


                <Box css={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    pb: "5rem",
                    "@sm": {
                        pb: "15rem"
                    }
                }}>
                    <Box css={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Text size="$4xl" weight="bold" css={{
                                lineHeight: "1.5",
                            }}>
                                ~/projects
                            </Text>
                            <Link href="/projects" css={{
                                display: "none",
                                "@xs": {
                                    display: "block"
                                }
                            }}>
                                <Button auto size={"md"} icon={<AiOutlineArrowRight />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    View all
                                </Button>
                            </Link>
                            <Link href="/projects" css={{
                                display: "block",
                                "@xs": {
                                    display: "none"
                                }
                            }}>
                                <Button auto size={"md"} icon={<AiOutlineArrowRight />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }} />
                            </Link>
                        </Box>
                        <Text size="$xl" weight="semibold" color={"#888"} css={{
                            lineHeight: "1.25",
                        }}>
                            A few featured projects that I&apos;ve worked on or am currently working on.
                        </Text>
                    </Box>
                    <Grid.Container gap={2}>
                        <Grid.Container gap={2}>
                            {projects.map((project, index) => (
                                <Grid key={index} xs={12} sm={6} md={4}>
                                    <ProjectCard data={project} />
                                </Grid>
                            ))}
                        </Grid.Container>
                    </Grid.Container>
                </Box>

                {/* <Box css={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    pb: "10rem",
                    "@sm": {
                        pb: "15rem"
                    }
                }}>
                    <Box css={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Text size="$4xl" weight="bold" css={{
                                lineHeight: "1.5",
                            }}>
                                ~/blog
                            </Text>
                            <Link href="/blog" css={{
                                display: "none",
                                "@xs": {
                                    display: "block"
                                }
                            }}>
                                <Button auto size={"md"} icon={<AiOutlineArrowRight />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    View all
                                </Button>
                            </Link>
                            <Link href="/projects" css={{
                                display: "block",
                                "@xs": {
                                    display: "none"
                                }
                            }}>
                                <Button auto size={"md"} icon={<AiOutlineArrowRight />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }} />
                            </Link>
                        </Box>
                        <Text size="$xl" weight="semibold" color={"#888"} css={{
                            lineHeight: "1.25",
                        }}>
                            A few featured blog articles that I&apos;ve written.
                        </Text>
                    </Box>
                    <Grid.Container gap={2}>
                        <Grid.Container gap={2}>
                            {allPosts.filter((post) => post.slug.includes("v5")).map((post, index) => (
                                <Grid key={index} xs={12} sm={6} md={4}>
                                    <BlogCard post={post} />
                                </Grid>
                            ))}
                        </Grid.Container>
                    </Grid.Container>
                </Box> */}

                <Box css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "2rem",
                    pb: "5rem",
                }}>
                    <Box css={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Text size="$4xl" weight="bold" css={{
                            lineHeight: "1.5",
                        }}>
                            ~/socials
                        </Text>
                        <Text size="$xl" weight="semibold" color={"#888"} css={{
                            lineHeight: "1.25",
                        }}>
                            I&apos;m currently working on a few projects over at <Link href="https://nordstud.io">Nord</Link> and <Link href="https://lofu.studio">Lofu</Link> Studio. <br />
                            You can find me on the platforms below.
                        </Text>
                    </Box>
                    <Box>

                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "1rem",
                            pb: "1rem"
                        }}>
                            <ExternalLink href="https://github.com/tygerxqt">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiFillGithub />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    GitHub
                                </Button>
                            </ExternalLink>
                            <ExternalLink href="https://twitter.com/tygerxqt">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiOutlineTwitter />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    Twitter
                                </Button>
                            </ExternalLink>
                            <ExternalLink href="https://instagram.com/tygerxqt">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiOutlineInstagram />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    Instagram
                                </Button>
                            </ExternalLink>
                        </Box>
                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "1rem",
                        }}>
                            <ExternalLink href="https://www.youtube.com/channel/UCDCBrrYkHrt4cFnoA2SKMdA">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiFillYoutube />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    YouTube
                                </Button>
                            </ExternalLink>
                            <ExternalLink href="mailto:tygerxqt@nordstud.io">
                                <Button auto size={{ "@initial": "sm", "@xs": "md" }} icon={<AiFillMail />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    Email
                                </Button>
                            </ExternalLink>
                        </Box>
                    </Box>
                </Box>
            </RootLayout>
        </>
    )
}

export async function getStaticProps(context) {
    const rawProjects = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/repos/tygr.dev,mc.tygr.dev,tauri-next-boilerplate?code=true`);
    const rawProjectsJSON: RawRepo[] = await rawProjects.json();

    const projects = [];

    for (const project of rawProjectsJSON) {
        const mdxSource = await serialize(project.readme);
        projects.push({
            ...project,
            source: mdxSource
        });
    }

    return {
        props: {
            projects: projects
        },
    }
}
