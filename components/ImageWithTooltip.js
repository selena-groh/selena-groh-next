import * as React from "react";
import Image from "next/image";
import { Box, Tooltip } from "@chakra-ui/react";

export default function ImageWithTooltip({ name, image }) {
  return (
    <Tooltip label={name} placement="bottom" offset={[0, -32]}>
      <Box>
        <Image
          src={`https:${image.fields.file.url}`}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          layout="responsive"
          alt={name}
        />
      </Box>
    </Tooltip>
  );
}
