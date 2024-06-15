import useGames from '../hooks/useGames';
import GameCardContainers from './GameCardContainers';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkelton from './GameCardSkelton';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainers key={skeleton}>
            <GameCardSkelton />
          </GameCardContainers>
        ))}
      {data?.results.map((game) => (
        <GameCardContainers key={game.id}>
          <GameCard game={game} />
        </GameCardContainers>
      ))}
    </SimpleGrid>
  );
}
