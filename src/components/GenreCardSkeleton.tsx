import { Card, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GenreCardSkeleton() {
  return (
    <Card borderRadius="10px" padding={3}>
      <Skeleton paddingY={5} />
      <SkeletonText paddingY={5} />
      <SkeletonText paddingY={5} />
      <SkeletonText paddingY={5} />
      <SkeletonText paddingY={5} />
    </Card>
  );
}
