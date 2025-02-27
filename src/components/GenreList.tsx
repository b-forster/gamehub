import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/images-url";
import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
    const { data: genres, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {genres.map(genre => <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            src={getCroppedImgUrl(genre.image_background)}
                            boxSize='32px'
                            borderRadius={8}
                            objectFit='cover' />
                        <Button
                            whiteSpace='normal'
                            textAlign='left'
                            fontSize='lg'
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                            variant='link'
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
                )}
            </List>
        </>
    )
}

export default GenreList