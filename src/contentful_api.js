import { createClient } from "contentful";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_KEY,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

// This is the standard Contentful client. It fetches
// content that has been published.
const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_KEY,
});

// This is a Contentful client that's been configured
// to fetch drafts and unpublished content.
// const previewClient = createClient({
// 	space: CONTENTFUL_SPACE_ID,
// 	accessToken: CONTENTFUL_PREVIEW_ACCESS_KEY,
// 	host: 'preview.contentful.com',
// })

// This little helper will let us switch between the two
// clients easily:
export default function contentfulClient() {
  // if (preview) {
  // 	return previewClient
  // }

  return client;
}

export async function fetchHobbies() {
  const client = contentfulClient();

  const hobbiesResult = await client.getEntries({
    content_type: "hobbyProject",
    order: "-fields.dateCompleted",
  });

  const hobbyProjects = hobbiesResult.items;
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
    bakingProjects,
    craftsProjects,
    puzzlesProjects,
    legoProjects,
  };
}

export async function fetchProjects() {
  const client = contentfulClient();

  const projectsResult = await client.getEntries({
    content_type: "project",
    order: "-fields.dateCompleted",
  });

  const projects = projectsResult.items;
  // Get list of all Tools Used and then Set makes unique
  const toolFilterOptions = [
    ...new Set(projects.flatMap((project) => project.fields.toolsUsed)),
  ];

  const toolFilters = toolFilterOptions.map((toolFilterOption) => ({
    name: toolFilterOption,
    isActive: false,
  }));

  return {
    projects,
    toolFilters,
  };
}
