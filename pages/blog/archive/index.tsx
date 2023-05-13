import { Text, Input, useTheme, Link, Button } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import BlogLayout from "layouts/BlogLayout";
import { Box } from "components/UI/Box";
import BlogRow from "components/Blog/Row";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import React from "react";
import { allPosts } from "contentlayer/generated";
import Head from "next/head";

export default function BlogRoute() {
    const { isDark } = useTheme();
    const [query, setQuery] = useState<string>("");

    return (
        <>
            <BlogLayout>
                <Head>
                    <title>Blog Archive | tygr.dev</title>
                    <meta name="title" content="Blog Archive | tygr.dev" />
                    <meta name="keywords" content="tygr.dev, tygrdev, tygerxqt, tygerxqt website, blog, archive" />
                    <meta
                        name="description"
                        content="A full list of my archived blog posts and tutorials."
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://tygr.dev/blog/archive" />
                    <meta property="og:title" content="Blog Archive | tygr.dev" />
                    <meta
                        property="og:description"
                        content="A full list of my archived blog posts and tutorials."
                    />
                    <meta property="og:image" content="https://i.imgur.com/fW9phFJ.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://tygr.dev/blog/archive" />
                    <meta property="twitter:title" content="Blog Archive | tygr.dev" />
                    <meta
                        property="twitter:description"
                        content="A full list of my archived blog posts and tutorials."
                    />
                    <meta
                        property="twitter:image"
                        content="https://i.imgur.com/fW9phFJ.png"
                    />
                </Head>
                <Box
                    css={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        py: "3rem",
                        "@xs": {
                            gap: "3rem",
                        },
                    }}
                >
                    <Box
                        css={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            pb: "1rem"
                        }}
                    >
                        <Text
                            weight="bold"
                            css={{
                                margin: "0",
                                lineHeight: "1",
                                fontSize: "$4xl",
                                "@xs": {
                                    fontSize: "$5xl",
                                },
                                "@sm": {
                                    fontSize: "$6xl",
                                },
                            }}
                        >
                            Blog Archive
                        </Text>
                        <Text
                            color={"#888"}
                            css={{
                                margin: "0",
                                lineHeight: "1.2",
                                fontSize: "$xl",
                                "@xs": {
                                    fontSize: "$2xl",
                                },
                                "@sm": {
                                    fontSize: "$3xl",
                                },
                            }}
                        >
                            A full list of my archived blog posts and tutorials.
                        </Text>
                        <Box css={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.5rem"
                        }}>
                            <Input
                                size="md"
                                placeholder="Search"
                                contentRight={<FaSearch color={"#888"} />}
                                value={query}
                                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                bordered
                                width="400px"
                            />
                            <Link href="/blog" css={{
                                display: "none",
                                "@xs": {
                                    display: "block"
                                }
                            }}>
                                <Button auto size={"md"} icon={<BiArrowBack />} css={{
                                    backgroundColor: isDark ? "#fff" : "#000",
                                    color: isDark ? "#000" : "#fff",
                                    zIndex: 1,
                                    fontWeight: "$semibold",
                                    "@xs": {
                                        fontSize: "1rem",
                                    }
                                }}>
                                    Go back
                                </Button>
                            </Link>
                            <Link href="/blog" css={{
                                display: "block",
                                "@xs": {
                                    display: "none"
                                }
                            }}>
                                <Button auto size={"md"} icon={<BiArrowBack />} css={{
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
                    </Box>
                    <Box css={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}>
                        {allPosts
                            .filter((post) => post.archived === true)
                            .filter((post) => post.title.toLowerCase().includes(query) || post.summary.toLowerCase().includes(query))
                            .map((post) => (
                                <BlogRow post={post} key={post._id} />
                            ))
                        }
                    </Box>
                </Box>
            </BlogLayout>
        </>
    );
}
