import axios from '../Hooks/axios';

class T {
}

export const GetGraphvizSvg = async (body: string): Promise<{ data: T; status: number }> => {

    const apiUrl: string = `https://quickchart.io/graphviz`;

    const { data, status } = await axios.post(
        apiUrl,
        JSON.stringify({ graph: body, layout: 'dot', format: 'svg' }),
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );

    return { data: data, status };
};