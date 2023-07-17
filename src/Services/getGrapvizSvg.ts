import axios from '../Hooks/axios';

export const GetGraphvizSvg = async (body: string): Promise<{ data: T; status: number }> => {

    const apiUrl = `https://quickchart.io/graphviz`;

    const { data, status } = await axios.post(
        apiUrl,
        JSON.stringify({ graph: body, layout: 'dot', format: 'svg' }),
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );

    //console.log(data);

    return { data: data, status };
};