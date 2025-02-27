import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import getCroppedImgUrl from "@/services/images-url";
import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

interface GameProps {
    game: Game;
}

const GameCard = ({ game }: GameProps) => {
    return (
        <Card >
            <Image src={getCroppedImgUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard