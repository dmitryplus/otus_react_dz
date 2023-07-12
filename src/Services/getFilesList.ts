import axios from '../Hooks/axios';

export const GetFilesList = async (): Promise<{ data: T; status: number }> => {
    const { data, status } = await axios.get("/files-list.json");

    if (status !== 200) {
        throw new Error();
    }

    return { data, status };

};
