import { useState } from "react";
import Image from "next/image";
import { Box, LinkBox, LinkOverlay, Tooltip } from "@chakra-ui/react";
import ConditionalWrapper from "components/utils/ConditionalWrapper";
import { ZoomButton, ZoomModal } from "components/ZoomModal";

const TOOLTIP_OFFSET = -60; // Move tooltip onto image enough for 2 lines

const ImageWithTooltip = ({ alt, tooltip, image, link, ...imageProps }) => {
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  return (
    <ConditionalWrapper
      condition={link}
      wrapper={(children) => <LinkBox>{children}</LinkBox>}
    >
      <Tooltip label={tooltip} placement="bottom" offset={[0, TOOLTIP_OFFSET]}>
        <Box position="relative">
          <ConditionalWrapper
            condition={link}
            wrapper={(children) => (
              <LinkOverlay href={link} isExternal>
                {children}
              </LinkOverlay>
            )}
          >
            <Image
              src={`https:${image.fields.file.url}`}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              alt={alt}
              placeholder="blur"
              // This is just a gray overlay while image is loading
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcWg8AAe8BNu73HEoAAAAASUVORK5CYII="
              style={{
                width: "100%",
                height: "auto",
              }}
              {...imageProps}
            />
          </ConditionalWrapper>
          <Box position="absolute" top="0" right="0">
            <ZoomButton onClick={() => setIsZoomModalOpen(true)} />
          </Box>
        </Box>
      </Tooltip>
      {isZoomModalOpen && (
        <ZoomModal
          imageUrl={image.fields.file.url}
          alt={alt}
          onClose={() => setIsZoomModalOpen(false)}
        />
      )}
    </ConditionalWrapper>
  );
};

export default ImageWithTooltip;
