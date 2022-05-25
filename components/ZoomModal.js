import React from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import { Lightbox } from "react-modal-image";
import { FiZoomIn } from "react-icons/fi";

const IMAGE_LIGHTBOX_MAX_WIDTH = 1000;

export const ZoomButton = ({ onClick, color = "white" }) => (
  <IconButton
    variant="unstyled"
    aria-label="Zoom image"
    icon={<Icon aria-label="Zoom" as={FiZoomIn} color={color} />}
    onClick={onClick}
    rounded="none"
  />
);

export const ZoomModal = ({ imageUrl, alt, onClose }) => (
  <Lightbox
    large={`https:${imageUrl}?w=${IMAGE_LIGHTBOX_MAX_WIDTH}`}
    alt={alt}
    onClose={onClose}
    imageBackgroundColor="white"
  />
);
