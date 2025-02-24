// React imports
import { useState } from "react"
// Internal imports
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PlatformSelector from "./components/PlatformSelector"
import { Genre } from "./hooks/useGenres"
import { Platform } from "./hooks/usePlatforms"
// 3rd party imports
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import SortSelector from "./components/SortSelector"


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >

      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            selectedGenre={gameQuery?.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery?.platform}
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid >
  )
}

export default App
