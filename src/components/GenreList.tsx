import { HStack, Image, List, ListItem, Skeleton } from "@chakra-ui/react";
import useGenres from "../hooks/useGenere";
import getCroppedUrlImage from "../services/image-url";
import { Text } from "@chakra-ui/react";
const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Skeleton height={"20px"} />;
  return (
    <List>
      {data.map((genres) => (
        <Skeleton isLoaded={!isLoading} key={genres.id}>
          <ListItem key={genres.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedUrlImage(genres.image_background)}
              />
              <Text fontSize="lg">{genres.name}</Text>
            </HStack>
          </ListItem>
        </Skeleton>
      ))}
    </List>
  );
};

export default GenreList;
