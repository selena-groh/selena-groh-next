import React from "react";
import { createClient } from "contentful";
import Image from "next/image";
import Layout from "/components/Layout";
import GoodreadsReadList from "/components/GoodreadsReadList";
import { Box, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import ImageWithTooltip from "../components/ImageWithTooltip";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "hobbyProject",
    // order: "fields.mainImageOrientation",
    // "fields.hobby": "Baking",
  });

  const hobbyProjects = res.items;
  const bakingProjects = hobbyProjects.filter(
    (hobby) => hobby.fields.hobby.fields.name === "Baking"
  );
  const craftsProjects = hobbyProjects.filter(
    (hobby) =>
      hobby.fields.hobby.fields.name === "Crafts" ||
      hobby.fields.hobby.fields.name === "Crochet"
  );
  const puzzlesProjects = hobbyProjects.filter(
    (hobby) => hobby.fields.hobby.fields.name === "Puzzles"
  );
  const legoProjects = hobbyProjects.filter(
    (hobby) => hobby.fields.hobby.fields.name === "LEGO"
  );

  return {
    props: {
      bakingProjects,
      craftsProjects,
      puzzlesProjects,
      legoProjects,
    },
  };
}

export default function Hobbies({
  bakingProjects = [],
  craftsProjects = [],
  puzzlesProjects = [],
  legoProjects = [],
}) {
  return (
    <Layout title="Hobbies">
      <Heading as="h1">Hobbies</Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={4}
        gridTemplateColumns={{ base: null, md: "max(400px) 1fr" }}
      >
        <Box mb={8}>
          <Heading size="lg" as="h2">
            <Link href="https://www.goodreads.com/user/show/129465259-selena">
              What I've Read Recently
            </Link>
          </Heading>
          <GoodreadsReadList />
        </Box>
        <Box mb={8}>
          <Heading as="h2" size="lg">
            What I've Built Recently
          </Heading>
          <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={2}>
            {legoProjects.map((project) => (
              <Box display="inline-block" width="100%">
                <ImageWithTooltip
                  name={project.fields.name}
                  image={project.fields.mainImage}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <Box mb={8}>
        <Heading as="h2" size="lg">
          Baking
        </Heading>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={2}>
          {bakingProjects.map((project) => (
            <ImageWithTooltip
              name={project.fields.name}
              image={project.fields.mainImage}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg">
          Crafts
        </Heading>
        <Box sx={{ columnCount: [2, 3, 4], gap: "8px" }}>
          {craftsProjects.map((project) => (
            <Box display="inline-block" width="100%">
              <ImageWithTooltip
                name={project.fields.name}
                image={project.fields.mainImage}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg">
          Puzzles
        </Heading>
        <Box sx={{ columnCount: [2, 2, 3], gap: "8px" }}>
          {puzzlesProjects.map((project) => (
            <Box display="inline-block" width="100%">
              <ImageWithTooltip
                name={project.fields.name}
                image={project.fields.mainImage}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
