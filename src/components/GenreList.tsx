import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenere";
import getCroppedUrlImage from "../services/image-url";
import { Text } from "@chakra-ui/react";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genres) => (
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
      ))}
    </List>
  );
};

export default GenreList;
