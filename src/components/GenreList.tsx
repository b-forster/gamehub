import useData from "@/hooks/useData";
import useGenres from "@/hooks/useGenres"
import getCroppedImgUrl from "@/services/images-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
    const { data: genres, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {genres.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image src={getCroppedImgUrl(genre.image_background)} boxSize='32px' borderRadius={8} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList