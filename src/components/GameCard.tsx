import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "@/services/images-url";

interface GameProps {
    game: Game;
}

const GameCard = ({ game }: GameProps) => {
    return (
        <Card width='300px' borderRadius={10} overflow='hidden' >
            <Image src={getCroppedImgUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard