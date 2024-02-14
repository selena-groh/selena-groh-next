import Hobbies from "./hobbies";
import { fetchHobbies } from "src/contentful_api";
import { Heading } from "@chakra-ui/react";

export const metadata = {
  title: "Hobbies",
};

export default async function Page() {
  const hobbiesData = await fetchHobbies();
  return (
    <>
      <Heading as="h1">Hobbies</Heading>
      <Hobbies {...hobbiesData} />
    </>
  );
}
