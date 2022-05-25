import React from "react";
import ImageWithTooltip from "components/ImageWithTooltip";
import TitleDate from "components/hobbies/TitleDate";

export default function ProjectImageWithTooltip({ project }) {
  return (
    <ImageWithTooltip
      alt={project.fields.name}
      tooltip={
        <TitleDate
          title={project.fields.name}
          date={project.fields.dateCompleted}
        />
      }
      image={project.fields.mainImage}
      link={project.fields.link}
    />
  );
}
