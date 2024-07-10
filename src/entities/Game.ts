import { PlateForm } from './PlateForm';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlateForm }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}
