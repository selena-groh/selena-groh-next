import { useState } from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  LinkOverlay,
  Spacer,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { ZoomButton, ZoomModal } from "components/ZoomModal";
import LinkBoxCard from "components/LinkBoxCard";

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
    <Box key={fields.slug} display="flex" height="100%">
      <LinkBoxCard>
        <VStack spacing={3} alignItems="flex-start">
          <Heading as="h2" size="md">
            <LinkOverlay href={primaryLink} isExternal>
              {fields.name}
            </LinkOverlay>
          </Heading>
          <Box position="relative" width="100%">
            <Image
              src={`https:${fields.icon.fields.file.url}`}
              alt=""
              width={fields.icon.fields.file.details.image.width}
              height={fields.icon.fields.file.details.image.height}
              placeholder="blur"
              // This is just a gray overlay while image is loading
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcWg8AAe8BNu73HEoAAAAASUVORK5CYII="
              sizes="(min-width: 1040px) 450px, (min-width: 48em) 50vw, 90vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Box position="absolute" top="0" right="0">
              <ZoomButton
                onClick={() => setIsZoomModalOpen(true)}
                color="black"
              />
            </Box>
          </Box>
          <Flex width="100%">
            <Text>{fields.date}</Text>
            <Spacer />
            {shouldShowGithubLink && (
              <Link href={fields.gitHubLink} variant="icon">
                <Icon aria-label="GitHub code" as={FaGithub} boxSize="1.4em" />
              </Link>
            )}
          </Flex>
          <div>{documentToReactComponents(fields.description, options)}</div>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {fields.toolsUsed.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </Box>
        </VStack>
      </LinkBoxCard>
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
