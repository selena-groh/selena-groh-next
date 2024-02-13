import { createClient } from "contentful";
import Layout from "components/layout/Layout";
import GoodreadsReadList from "components/hobbies/GoodreadsReadList";
import { Box, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import ProjectImageWithTooltip from "components/hobbies/ProjectImageWithTooltip";
import FadeIn from "components/FadeIn";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "hobbyProject",
    order: "-fields.dateCompleted",
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

const Hobbies = ({
  bakingProjects = [],
  craftsProjects = [],
  puzzlesProjects = [],
  legoProjects = [],
}) => {
  return (
    <Layout title="Hobbies">
      <Heading as="h1">Hobbies</Heading>
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
            class="airtable-embed"
            src="https://airtable.com/embed/apprSF7eWGARSpeAg/shrwEY63TzK4BSpcE?backgroundColor=purple"
            frameborder="0"
            onmousewheel=""
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
    </Layout>
  );
};

export default Hobbies;
