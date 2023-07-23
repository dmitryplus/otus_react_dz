import { unserialize } from 'locutus/php/var';
import axios from '../../Hooks/axios';

const folder = '../Data/';

// eslint-disable-next-line @typescript-eslint/ban-types
export const LoadXhprofFromFolder = async (fileName: string): Promise<{ data: {}; status: number }> => {
  const { data, status } = await axios.get(folder + fileName);

  if (status !== 200) {
    throw new Error();
  }

  return { data: unserialize(data), status };
};
