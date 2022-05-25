import * as React from "react";
import Image from "next/image";
import { Box, Link, Tooltip } from "@chakra-ui/react";
import ConditionalWrapper from "./utils/ConditionalWrapper";

const IMAGE_MAX_WIDTH = 400;

export default function ImageWithTooltip({ alt, tooltip, image, link }) {
  return (
    <ConditionalWrapper
      condition={link}
      wrapper={(children) => (
        <Link href={link} isExternal>
          {children}
        </Link>
      )}
    >
      <Tooltip label={tooltip} placement="bottom" offset={[0, -60]}>
        <Box>
          <Image
            src={`https:${image.fields.file.url}?w=${IMAGE_MAX_WIDTH}`}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
            alt={alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcWg8AAe8BNu73HEoAAAAASUVORK5CYII=" // This is just a gray overlay while image is loading
          />
        </Box>
      </Tooltip>
    </ConditionalWrapper>
  );
}
