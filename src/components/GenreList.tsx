import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenere";
import getCroppedUrlImage from "../services/image-url";
import { Text } from "@chakra-ui/react";
interface Props {
  onSelectedGenre: (genre: Genres) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Skeleton height={"20px"} />;
  const genreLoading = [1, 2, 3, 4, 5, 6];
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
              <Button
                onClick={() => onSelectedGenre(genres)}
                fontSize="lg"
                variant={"link"}
              >
                {genres.name}
              </Button>
            </HStack>
          </ListItem>
        </Skeleton>
      ))}
    </List>
  );
};

export default GenreList;
