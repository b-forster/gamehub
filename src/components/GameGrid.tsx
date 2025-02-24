import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";

interface GameGridProps {
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
    const { data: games, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={3}>
                {games.map(game =>
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                )}
                {isLoading && skeletons.map(skel =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skel} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid