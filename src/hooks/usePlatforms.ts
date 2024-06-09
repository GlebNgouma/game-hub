import useData from './useData';

interface PlateForm {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<PlateForm>('/platforms/lists/parents');

export default usePlatforms;
