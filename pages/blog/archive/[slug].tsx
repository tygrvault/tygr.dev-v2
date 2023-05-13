import { GetStaticPaths } from 'next'
import { Avatar, Text, Image, useTheme } from '@nextui-org/react'
import BlogLayout from 'layouts/BlogLayout';
import { Box } from 'components/UI/Box';
import dateformat from "dateformat";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts, Post } from 'contentlayer/generated';
import BlogComponents from 'components/Blog/BlogComponents';
import Head from "next/head";

export default function ArchivedBlogPost({ post }: { post: Post }) {
    const { isDark } = useTheme();
    const MDXContent = useMDXComponent(post.body.code ?? "");

    return (
        <>
            <BlogLayout>
                <Head>
                    <title>{post.title} | tygr.dev</title>
                    <meta name="title" content={`${post.title} | tygr.dev`} />
                    <meta name="keywords" content="tygr.dev, tygrdev, tygerxqt, tygerxqt website, blog, post" />
                    <meta
                        name="description"
                        content={post.summary}
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={post.url} />
                    <meta property="og:title" content={post.title} />
                    <meta
                        property="og:description"
                        content={post.summary}
                    />
                    <meta property="og:image" content={post.image} />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={post.url} />
                    <meta property="twitter:title" content={post.title} />
                    <meta
                        property="twitter:description"
                        content={post.summary}
                    />
                    <meta
                        property="twitter:image"
                        content={post.image}
                    />
                </Head>
                <Box css={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "700px",
                    mx: "auto",
                    my: "4rem",
                    width: "100%",
                }}>
                    <Text weight="extrabold" css={{
                        margin: "0",
                        lineHeight: "1",
                        pb: "1rem",
                        fontSize: "$4xl",
                        "@xs": {
                            fontSize: "$6xl",
                        },
                    }}>
                        {post.title}
                    </Text>
                    <Box css={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "2rem",
                    }}>
                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyItems: "center"
                        }}>
                            <Avatar src={"https://secure.gravatar.com/avatar/871c2885d0acbbc08be33547816255e3?size=512"} size="sm" />
                            <Text css={{
                                ml: "0.25rem",
                                fontSize: "1rem",
                                fontWeight: "$semibold",
                                color: "#888",
                            }}>
                                tygerxqt • {dateformat(post.date, "mmmm dS, yyyy")}
                            </Text>
                        </Box>
                        <Text color={"#888"} css={{ fontWeight: "$semibold" }}>
                            {post.readingTime}
                        </Text>
                    </Box>
                    <Image src={post.image} height={"100%"} width={"100%"} objectFit={"cover"} alt={post.title} css={{
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        borderRadius: "14px",
                        mb: "1rem"
                    }} />

                    <MDXContent components={isDark ? BlogComponents.Dark : BlogComponents.Light} />
                </Box>
            </BlogLayout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = allPosts.filter((post) => post.archived === true).map((post) => post.url)
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }: { params: any }) => {
    const post = allPosts.filter((post) => post.archived === true).find((post) => post._raw.flattenedPath === params.slug)

    if (!post) {
        return;
    }

    return {
        props: {
            post
        }
    }
};