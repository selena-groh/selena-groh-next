import * as React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import {
  Box,
  Heading,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
} from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri}>{children}</Link>
    ),
  },
};

const ProjectCard = ({ project }) => {
  const primaryLink =
    project.fields.liveLink || project.fields.gitHubLink || "";
  const shouldShowGithubLink =
    project.fields.gitHubLink && primaryLink !== project.fields.gitHubLink;

  return (
    <Box key={project.fields.slug} display="flex">
      <LinkBox as="article" p="5" borderWidth="1px" rounded="md">
        <Image
          src={`https:${project.fields.icon.fields.file.url}`}
          width={project.fields.icon.fields.file.details.image.width}
          height={project.fields.icon.fields.file.details.image.height}
          layout="responsive"
        />
        <Heading as="h3" size="md" my={3}>
          <NextLink href={primaryLink} passHref>
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
        {shouldShowGithubLink && (
          <Link href={project.fields.gitHubLink}>
            <Icon aria-label="GitHub code" as={FaGithub} />
          </Link>
        )}
      </LinkBox>
    </Box>
  );
};

export default ProjectCard;
