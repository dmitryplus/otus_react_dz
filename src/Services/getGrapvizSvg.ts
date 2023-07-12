import { unserialize } from 'locutus/php/var';
import axios from '../Hooks/axios';
import { parse } from 'svg-parser';

export const GetGraphvizSvg = async (body: string): Promise<{ data: T; status: number }> => {


    const apiUrl = `https://quickchart.io/graphviz`;
    fetch(apiUrl,
        {
            method: 'post',
            body: JSON.stringify({ graph: body, layout: 'dot', format: 'svg' }),
            headers: { 'Content-Type': 'application/json' }
        }
    )
        .then((res) => res.text())
        .then((repos) => {

            const cleanRepo = repos.substring(repos.indexOf('<svg'), repos.indexOf('svg>') + 4);

            console.log(repos);

            const fullParsed = parse(repos);


            // const test = fullParsed?.children[0]?.children[0]?.properties;

            // console.log(test);

            const parsed = fullParsed?.children[0];

            //console.log(parsed);


            const svgParams = { ...parsed?.properties, ...fullParsed?.children[0]?.children[0]?.properties };
            const elements = parsed?.children[0]?.children;

            //setAppState({ fullSvg: cleanRepo, svgParams: svgParams, elements: elements });

            console.log('svgParams', svgParams);
            //console.log('elements', elements);

        });


    return { data: '', status };
};