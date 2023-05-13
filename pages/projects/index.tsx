import { Text, Input, Grid, useTheme } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import ProjectLayout from "layouts/ProjectLayout";
import { Box } from "components/UI/Box";
import ProjectCard from "components/Projects/Card";
import { useState } from "react";
import Repo, { RawRepo } from "interfaces/Repo";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";

export default function ProjectRoute({ projects }: { projects: Repo[] }) {
  const [query, setQuery] = useState<string>("");
  const { isDark } = useTheme();

  return (
    <>
      <ProjectLayout>
        <Head>
          <title>Projects | tygr.dev</title>
          <meta name="title" content="Projects | tygr.dev" />
          <meta name="keywords" content="tygr.dev, tygrdev, tygerxqt, tygerxqt website, tygerxqt projects" />
          <meta
            name="description"
            content="A full list of all projects I have created or worked on."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tygr.dev/projects" />
          <meta property="og:title" content="Projects | tygr.dev" />
          <meta
            property="og:description"
            content="A full list of all projects I have created or worked on."
          />
          <meta property="og:image" content="https://i.imgur.com/fW9phFJ.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://tygr.dev/projects" />
          <meta property="twitter:title" content="Projects | tygr.dev" />
          <meta
            property="twitter:description"
            content="A full list of all projects I have created or worked on."
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
            gap: "2rem",
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
              Projects
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
              A full list of all projects I have created or worked on.
            </Text>
            <Input
              size="md"
              placeholder="Search"
              contentRight={<FaSearch color={"#888"} />}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              bordered
              css={{
                maxW: "400px",
              }}
            />
          </Box>
          {projects && (
            <>
              <Grid.Container gap={2}>
                {projects.map((project, index) => (
                  <Grid key={index} xs={12} sm={6} md={4}>
                    <ProjectCard data={project} />
                  </Grid>
                ))}
              </Grid.Container>
            </>
          )}
        </Box>
      </ProjectLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const rawProjects = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/repos?code=true`);
  const rawProjectsJSON: RawRepo[] = await rawProjects.json();

  const projects = [];

  for (const project of rawProjectsJSON) {
    const mdxSource = await serialize(project.readme);
    projects.push({
      ...project,
      source: mdxSource,
    });
  }

  return {
    props: {
      projects: projects
    },
  }
}