import { useState } from "react";
import { createClient } from "contentful";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "/components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  HStack,
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

  const projects = res.items;
  // Get list of all Tools Used and then Set makes unique
  const toolFilterOptions = [
    ...new Set(projects.flatMap((project) => project.fields.toolsUsed)),
  ];

  const toolFilters = toolFilterOptions.map((toolFilterOption) => ({
    name: toolFilterOption,
    isActive: false,
  }));

  return {
    props: {
      projects,
      toolFilters,
    },
  };
}

function Projects({ projects, toolFilters }) {
  const [filters, setFilters] = useState(toolFilters);

  const getFilteredProjects = () => {
    const activeFilters = filters.filter((filter) => filter.isActive);
    if (activeFilters.length === 0) {
      return projects;
    }
    // Get names of all filters that are activated
    const activeFilterNames = activeFilters.map((filter) => filter.name);

    // Get all projects that have at least one tool that is also in the active filters
    return projects.filter((project) =>
      // project.fields.toolsUsed.every((tool) => activeFilterNames.includes(tool))
      activeFilterNames.every((activeFilter) =>
        project.fields.toolsUsed.includes(activeFilter)
      )
    );
  };

  const filteredProjects = getFilteredProjects();

  return (
    <Layout title="Projects">
      <Heading as="h1" mb={4}>
        Projects
      </Heading>
      <HStack wrap="wrap" spacing={1} mb={4}>
        {filters.map((filter) => (
          <Tag
            key={filter.name}
            borderRadius="full"
            variant={filter.isActive ? "solid" : "outline"}
            cursor="pointer"
            onClick={() =>
              setFilters((prevFilters) =>
                prevFilters.map((prevFilter) =>
                  prevFilter.name === filter.name
                    ? // Toggle isActive if the filter is the current filter
                      { ...prevFilter, isActive: !prevFilter.isActive }
                    : { ...prevFilter }
                )
              )
            }
          >
            {filter.name}
          </Tag>
        ))}
      </HStack>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
        {filteredProjects.map((project) => (
          <Box key={project.fields.slug} display="flex">
            <LinkBox as="article" p="5" borderWidth="1px" rounded="md">
              <Image
                src={`https:${project.fields.icon.fields.file.url}`}
                width={project.fields.icon.fields.file.details.image.width}
                height={project.fields.icon.fields.file.details.image.height}
                layout="responsive"
              />
              <Heading as="h3" size="md" my={3}>
                <NextLink href={`/projects/${project.fields.slug}`} passHref>
                  <LinkOverlay>{project.fields.name}</LinkOverlay>
                </NextLink>
              </Heading>
              <Text mb={3}>{project.fields.date}</Text>
              <Text mb={3}>
                {documentToReactComponents(project.fields.description, options)}
              </Text>
              <Box display="flex" flexWrap="wrap" gap={2} my={3}>
                {project.fields.toolsUsed.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </Box>
              {project.fields.liveLink && (
                <Link href={project.fields.liveLink} mr={2}>
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
