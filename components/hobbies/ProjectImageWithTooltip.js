import ImageWithTooltip from "components/ImageWithTooltip";
import TitleDate from "components/hobbies/TitleDate";

const ProjectImageWithTooltip = ({ project }) => {
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
};

export default ProjectImageWithTooltip;
