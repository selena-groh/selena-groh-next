import Projects from "./projects";
import { fetchProjects } from "src/contentful_api";
import { Heading } from "@chakra-ui/react";

export const metadata = {
  title: "Projects",
};

export default async function Page() {
  const projectData = await fetchProjects();
  return (
    <>
      <Heading as="h1" mb={4}>
        Projects
      </Heading>
      <Projects {...projectData} />
    </>
  );
}
