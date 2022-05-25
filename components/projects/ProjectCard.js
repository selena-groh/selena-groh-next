import React, { useState } from "react";
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
import { ZoomButton, ZoomModal } from "components/ZoomModal";

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri}>{children}</Link>
    ),
  },
};

const ProjectCard = ({ project }) => {
  const { fields } = project;
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const primaryLink = fields.liveLink || fields.gitHubLink || "";
  const shouldShowGithubLink =
    fields.gitHubLink && primaryLink !== fields.gitHubLink;

  return (
    <Box key={fields.slug} display="flex">
      <LinkBox as="article" p="5" borderWidth="1px" rounded="md">
        <Heading as="h3" size="md" my={3}>
          <NextLink href={primaryLink} passHref>
            <LinkOverlay>{fields.name}</LinkOverlay>
          </NextLink>
        </Heading>
        <Box position="relative">
          <Image
            src={`https:${fields.icon.fields.file.url}`}
            width={fields.icon.fields.file.details.image.width}
            height={fields.icon.fields.file.details.image.height}
            layout="responsive"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcWg8AAe8BNu73HEoAAAAASUVORK5CYII=" // This is just a gray overlay while image is loading
          />
          <Box position="absolute" top="0" right="0">
            <ZoomButton
              onClick={() => setIsZoomModalOpen(true)}
              color="black"
            />
          </Box>
        </Box>
        <Text mb={3}>{fields.date}</Text>
        <Text mb={3}>
          {documentToReactComponents(fields.description, options)}
        </Text>
        <Box display="flex" flexWrap="wrap" gap={2} my={3}>
          {fields.toolsUsed.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </Box>
        {shouldShowGithubLink && (
          <Link href={fields.gitHubLink}>
            <Icon aria-label="GitHub code" as={FaGithub} />
          </Link>
        )}
      </LinkBox>
      {isZoomModalOpen && (
        <ZoomModal
          imageUrl={fields.icon.fields.file.url}
          alt={fields.name}
          onClose={() => setIsZoomModalOpen(false)}
        />
      )}
    </Box>
  );
};

export default ProjectCard;
