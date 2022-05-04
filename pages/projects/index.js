import { createClient } from "contentful";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "/components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri}>{children}</Link>
    ),
  },
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "project",
    order: "-fields.dateCompleted",
  });

  return {
    props: {
      projects: res.items,
    },
  };
}

function Projects({ projects }) {
  return (
    <Layout title="Projects">
      <Heading as="h1">Projects</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
        {projects.map((project) => (
          <Box key={project.fields.slug} display="flex">
            <LinkBox
              as="article"
              maxW="sm"
              p="5"
              borderWidth="1px"
              rounded="md"
            >
              <Image
                src={`https:${project.fields.icon.fields.file.url}`}
                width={project.fields.icon.fields.file.details.image.width}
                height={project.fields.icon.fields.file.details.image.height}
                layout="responsive"
              />
              <Heading as="h3" size="md" my="2">
                <NextLink href={`/projects/${project.fields.slug}`} passHref>
                  <LinkOverlay>{project.fields.name}</LinkOverlay>
                </NextLink>
              </Heading>
              <Text>{project.fields.date}</Text>
              <Text mb="3">
                {documentToReactComponents(project.fields.description, options)}
              </Text>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {project.fields.toolsUsed.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </Box>
              {project.fields.liveLink && (
                <Link href={project.fields.liveLink}>
                  <Icon aria-label="Live link" as={FaExternalLinkAlt} />
                </Link>
              )}
              {project.fields.gitHubLink && (
                <Link href={project.fields.gitHubLink}>
                  <Icon aria-label="GitHub code" as={FaGithub} />
                </Link>
              )}
            </LinkBox>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export default Projects;
