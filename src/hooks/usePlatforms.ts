import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import platforms from '../data/platforms';
import ms from 'ms';
import { PlateForm } from '../entities/PlateForm';

const apiClient = new APIClient<PlateForm>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
// const usePlatforms = () => useData<PlateForm>('/platforms/lists/parents');

export default usePlatforms;
