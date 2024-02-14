"use client";

import { useState } from "react";
import ProjectCard from "components/projects/ProjectCard";
import { Box, SimpleGrid, Tag } from "@chakra-ui/react";
import FadeIn from "components/FadeIn";

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
    <>
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
          <FadeIn key={project.fields.name} delay={index % 2 === 0 ? 0 : 0.2}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
