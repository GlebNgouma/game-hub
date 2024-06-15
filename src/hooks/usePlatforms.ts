import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

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
    staleTime: 24 * 60 * 60 * 1000,
    // initialData:{count:}
  });
// const usePlatforms = () => useData<PlateForm>('/platforms/lists/parents');

export default usePlatforms;
