import axios from "axios";

export const GetGraphvizSvg = async (body: string): Promise<{ data: string; status: number }> => {
  const apiUrl = `https://quickchart.io/graphviz`;

  const { data, status } = await axios.post(apiUrl, JSON.stringify({ graph: body, layout: 'dot', format: 'svg' }), {
    headers: { 'Content-Type': 'application/json' },
  });

  return { data, status };
};
