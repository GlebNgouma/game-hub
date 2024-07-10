import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

export default function GameCard({
  game: {
    background_image,
    name,
    parent_platforms,
    metacritic,
    rating_top,
    slug,
  },
}: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${slug}`}>{name.substring(0, 17)}</Link>
          <Emoji rating={rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}
