import { Box, Text } from "@chakra-ui/react";

const TitleDate = ({ title, date }) => {
  return (
    <Box textAlign="center">
      {title && <Text>{title}</Text>}
      {date && (
        <Text>
          {new Date(date).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
          })}
        </Text>
      )}
    </Box>
  );
};

export default TitleDate;
