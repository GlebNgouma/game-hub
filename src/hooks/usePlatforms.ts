import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import platforms from '../data/platforms';
import ms from 'ms';

const apiClient = new APIClient<PlateForm>('/platforms/lists/parents');

export interface PlateForm {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
// const usePlatforms = () => useData<PlateForm>('/platforms/lists/parents');

export default usePlatforms;
