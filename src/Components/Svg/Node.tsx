import React, { FC } from 'react';
import { SvgElement } from '../../Redux/svg';


export const Node: FC = (params: SvgElement) => {


    //console.log(params);

    let title = '';
    let fill = '';
    let stroke = '';
    let points = '';

    const textElements = [];

    params.children.forEach((item, index) => {

        //console.log(item);

        if (item.tagName === 'title') {
            title = item.children[0].value;
        }

        if (item.tagName === 'polygon') {

            fill = item.properties.fill;
            stroke = item.properties.stroke;
            points = item.properties.points;



        }

        if (item.tagName === 'text') {

            textElements.push(
                <text
                    textAnchor={item.properties["text-anchor"]}
                    x={item.properties.x}
                    y={item.properties.y}
                    fontFamily={item.properties["font-family"]}
                    fontSize={item.properties["font-size"]}
                    fill={item.properties.fill}
                    key={index + params.properties?.id + item.children[0].value}
                >
                    {item.children[0].value}
                </text>
            );

        }

    });

    return <g id={params.properties?.id} className={params.properties?.class} key={params.properties?.id}>
        <title>{title}</title>
        <polygon fill={fill} stroke={stroke} points={points} />
        {textElements.map(item => item)}
    </g>;


};
