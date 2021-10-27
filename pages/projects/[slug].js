import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "project",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "project",
    "fields.slug": params.slug,
  });

  if (!res.items.length) {
    return {
      redirect: {
        destination: "/projects",
        permanent: false,
      },
    };
  }
  return {
    props: {
      project: res.items[0],
      revalidate: 1,
    },
  };
}

function Project({ project }) {
  if (!project) return <p>Loading...</p>;

  const icon = project.fields.icon;
  return (
    <div>
      <div>
        <h1>{project.fields.name}</h1>
        <div>
          <Image
            src={"https:" + icon.fields.file.url}
            width={icon.fields.file.details.image.width}
            height={icon.fields.file.details.image.height}
          />
          <div>
            <ul>
              {project.fields.toolsUsed.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Link href="/projects/">
          <a>See More Projects</a>
        </Link>
      </div>
    </div>
  );
}

Project.title = "Project";

export default Project;
