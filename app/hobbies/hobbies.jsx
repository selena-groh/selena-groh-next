"use client";

import GoodreadsReadList from "components/hobbies/GoodreadsReadList";
import { Box, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import ProjectImageWithTooltip from "components/hobbies/ProjectImageWithTooltip";
import FadeIn from "components/FadeIn";

const Hobbies = ({
  bakingProjects = [],
  craftsProjects = [],
  puzzlesProjects = [],
  legoProjects = [],
}) => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={4}
        gridTemplateColumns={{ base: null, md: "max(400px) 1fr" }}
      >
        <FadeIn>
          <Box mb={8}>
            <Heading as="h2" size="lg">
              <Link href="https://www.goodreads.com/user/show/129465259-selena">
                What I've Been Reading
              </Link>
            </Heading>
            <GoodreadsReadList />
          </Box>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Box mb={8}>
            <Heading as="h2" size="lg">
              LEGO Constructs
            </Heading>
            <SimpleGrid columns={{ base: 2, sm: 3 }} columnGap={2}>
              {legoProjects.map((project) => (
                <ProjectImageWithTooltip
                  project={project}
                  key={project.fields.name}
                />
              ))}
            </SimpleGrid>
          </Box>
        </FadeIn>
      </SimpleGrid>
      <FadeIn>
        <Box mb={8}>
          <Heading as="h2" size="lg">
            Recent Puzzle Favorites
          </Heading>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/apprSF7eWGARSpeAg/shrwEY63TzK4BSpcE?backgroundColor=purple"
            width="100%"
            height="700"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          ></iframe>
        </Box>
      </FadeIn>
      <FadeIn>
        <Box mb={8}>
          <Heading as="h2" size="lg">
            Crafts & Creations
          </Heading>
          <Box sx={{ columnCount: [2, 3, 4], gap: "8px" }}>
            {craftsProjects.map((project) => (
              <Box
                display="inline-block"
                width="100%"
                key={project.fields.name}
              >
                <ProjectImageWithTooltip project={project} />
              </Box>
            ))}
          </Box>
        </Box>
      </FadeIn>
      <FadeIn>
        <Box mb={8}>
          <Heading as="h2" size="lg">
            &ldquo;What Baking Can Do&rdquo;
          </Heading>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} columnGap={2}>
            {bakingProjects.map((project) => (
              <ProjectImageWithTooltip
                project={project}
                key={project.fields.name}
              />
            ))}
          </SimpleGrid>
        </Box>
      </FadeIn>
    </>
  );
};

export default Hobbies;
