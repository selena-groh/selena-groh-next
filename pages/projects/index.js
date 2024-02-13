import { useState } from "react";
import { createClient } from "contentful";
import Layout from "components/layout/Layout";
import ProjectCard from "components/projects/ProjectCard";
import { Box, Heading, SimpleGrid, Tag } from "@chakra-ui/react";
import FadeIn from "components/FadeIn";

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

const Projects = ({ projects, toolFilters }) => {
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
      <Box>
        {filters.map((filter) => (
          <Tag
            key={filter.name}
            my={1}
            mx={0.5}
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
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} mt={4}>
        {filteredProjects.map((project, index) => (
          <FadeIn delay={index % 2 === 0 ? 0 : 0.2}>
            <ProjectCard key={project.fields.name} project={project} />
          </FadeIn>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Projects;
