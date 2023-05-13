import { Text, Input, useTheme, Grid, Button, Link } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import BlogLayout from "layouts/BlogLayout";
import { Box } from "components/UI/Box";
import BlogCard from "components/Blog/Card";
import { useState } from "react";
import { BsArchiveFill } from "react-icons/bs";
import { allPosts } from "contentlayer/generated";
import Head from "next/head";

export default function BlogRoute() {
  const { isDark } = useTheme();
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <BlogLayout>
        <Head>
          <title>Blog | tygr.dev</title>
          <meta name="title" content="Blog | tygr.dev" />
          <meta name="keywords" content="tygr.dev, tygrdev, tygerxqt, tygerxqt website, tygerxqt blog" />
          <meta
            name="description"
            content="All of my blog posts and tutorials. I write about web development, programming, and games."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tygr.dev/blog" />
          <meta property="og:title" content="Blog | tygr.dev" />
          <meta
            property="og:description"
            content="All of my blog posts and tutorials. I write about web development, programming, and games."
          />
          <meta property="og:image" content="https://i.imgur.com/fW9phFJ.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tygr.dev/blog" />
          <meta property="twitter:title" content="Blog | tygr.dev" />
          <meta
            property="twitter:description"
            content="All of my blog posts and tutorials. I write about web development, programming, and games."
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
              Blog
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
              All of my blog posts and tutorials. I write about web development, programming, and games.
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
              <Link href="/blog/archive" css={{
                display: "none",
                "@xs": {
                  display: "block"
                }
              }}>
                <Button auto size={"md"} icon={<BsArchiveFill />} css={{
                  backgroundColor: isDark ? "#fff" : "#000",
                  color: isDark ? "#000" : "#fff",
                  zIndex: 1,
                  fontWeight: "$semibold",
                  "@xs": {
                    fontSize: "1rem",
                  }
                }}>
                  Archive
                </Button>
              </Link>
              <Link href="/blog/archive" css={{
                display: "block",
                "@xs": {
                  display: "none"
                }
              }}>
                <Button auto size={"md"} icon={<BsArchiveFill />} css={{
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
          <Grid.Container gap={2}>
            {allPosts
              .filter((post) => post.archived === false)
              .filter((post) => post.title.toLowerCase().includes(query) || post.summary.toLowerCase().includes(query))
              .map((post, index) => (
                <>
                  <Grid xs={12} sm={6} md={4} key={index}>
                    <BlogCard post={post} key={post._id} />
                  </Grid>
                </>
              ))}
          </Grid.Container>
        </Box>
      </BlogLayout>
    </>
  );
}
