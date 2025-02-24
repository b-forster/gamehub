import useGenres, { Genre } from "@/hooks/useGenres"
import getCroppedImgUrl from "@/services/images-url";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
    const { data: genres, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {genres.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image src={getCroppedImgUrl(genre.image_background)} boxSize='32px' borderRadius={8} />
                        <Button fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList