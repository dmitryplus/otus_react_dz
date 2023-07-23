import { unserialize } from 'locutus/php/var';
import axios from '../Hooks/axios';

const folder: string = '../Data/';

export const LoadXhprofFromFolder = async (fileName: string): Promise<{ data: T; status: number }> => {
  const { data, status } = await axios.get(folder + fileName);

  if (status !== 200) {
    throw new Error();
  }

  return { data: unserialize(data), status };
};
