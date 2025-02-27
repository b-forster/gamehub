import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface GameGridProps {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
    const { data: games, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error}</Text>;

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={6}>
            {games.map(game =>
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            )}
            {isLoading && skeletons.map(skel =>
                <GameCardContainer key={skel}>
                    <GameCardSkeleton />
                </GameCardContainer>
            )}
        </SimpleGrid>
    )
}

export default GameGrid