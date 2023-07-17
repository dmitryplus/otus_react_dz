import React, { useEffect } from 'react';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fillStateFromSvg } from '../Redux/svg';

interface ContainerProps {}


export const Container: React.FC<ContainerProps> = ({}: ContainerProps) => {

    const originalSvg = useSelector(store => store.files.svg);
    const svgParams = useSelector(store => store.svg.params);
    const svgElements = useSelector(store => store.svg.elements);

    const dispatch = useDispatch<any>();

    useEffect(() => {

        if (originalSvg != null) {
            dispatch(fillStateFromSvg(originalSvg));
        }

    }, [originalSvg]);


    console.log('end');


    const Node = (params) => {

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

    }

    const Edge = (params) => {

        //console.log(params);

        return <g id="{params.properties?.id}" className="{params.properties?.class}">
        </g>;

    }


    const Canvas = () => {

         let nodes = [];

         let edges = [];

         if (svgElements) {


            svgElements.forEach((item) => {

                if (item.properties.class === 'node') {
                    nodes.push(Node(item));

                }

                // if (item.properties.class === 'edge') {
                //
                //     edges.push(Edge(item));
                //
                // }

            });

        }



        if (svgParams) {


            console.log(svgParams['transform']);


            return <svg
            xmlns="http://www.w3.org/2000/svg"
         //   viewBox={svgParams['viewBox']}
            width={svgParams['width']}
            height={svgParams['height']}
                >
                <g id={svgParams['id']} className={svgParams['class']} transform="scale(1 1) translate(4 2970.0161)">
                    {nodes.map(item => item)}

                </g>
        </svg>

        }


        return <p>empty</p>;

    };



    // <svg width="4579pt" height="2974pt"
    //      viewBox="0.00 0.00 4579.14 2974.02" xmlns="http://www.w3.org/2000/svg"
    //      xmlns:xlink="http://www.w3.org/1999/xlink">
    //     <g id="graph0" className="graph" transform="scale(1 1) rotate(0) translate(4 2970.0161)">
    //         <title>call_graph</title>
    //         <polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-2970.0161 4575.1358,-2970.0161 4575.1358,4 -4,4" />
    //         <!-- N0 -->
    //         <g id="node1" className="node">
    //             <title>N0</title>
    //             <polygon fill="#ffff00" stroke="#000000"
    //                      points="1998.6237,-2694.2012 1857.3379,-2694.2012 1857.3379,-2628.9988 1998.6237,-2628.9988 1998.6237,-2694.2012" />
    //             <text text-anchor="middle" x="1927.9808" y="-2679.6" font-family="Times,serif" font-size="12.00"
    //                   fill="#000000">ExecuteModuleEventEx</text>
    //             <text text-anchor="middle" x="1927.9808" y="-2665.2" font-family="Times,serif" font-size="12.00" fill="#000000">Inc: 4191.891 ms (99.4%)</text>
    //             <text text-anchor="middle" x="1927.9808" y="-2650.8" font-family="Times,serif" font-size="12.00" fill="#000000">Excl: 1.353 ms (0.0%)</text>
    //             <text text-anchor="middle" x="1927.9808" y="-2636.4" font-family="Times,serif" font-size="12.00" fill="#000000">56 total calls</text>
    //         </g>
    //     </g>
    // </svg>

    // JSX компонент
    //
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.00 0.00 4579.14 2974.02" width="4579pt" height="2974pt">
    //     <g id="graph0" className="graph" transform="scale(1 1) rotate(0) translate(4 2970.0161)">
    //
    //     <g id="node1" className="node">
    //     <title>N0</title>
    //     <polygon fill="#ffff00" stroke="#000000" points="1998.6237,-2694.2012 1857.3379,-2694.2012 1857.3379,-2628.9988 1998.6237,-2628.9988 1998.6237,-2694.2012" />
    //     <text textAnchor="middle" x="1927.9808" y="-2679.6" fontFamily="Times,serif" fontSize="12.00" fill="#000000">ExecuteModuleEventEx</text>
    //     <text textAnchor="middle" x="1927.9808" y="-2665.2" fontFamily="Times,serif" fontSize="12.00" fill="#000000">Inc: 4191.891 ms (99.4%)</text>
    //     <text textAnchor="middle" x="1927.9808" y="-2650.8" fontFamily="Times,serif" fontSize="12.00" fill="#000000">Excl: 1.353 ms (0.0%)</text>
    //     <text textAnchor="middle" x="1927.9808" y="-2636.4" fontFamily="Times,serif" fontSize="12.00" fill="#000000">56 total calls</text>
    // </g>
    //
    // </g>
    // </svg>


    return (
        <Styles.Container>
            <Canvas />
        </Styles.Container>
    );
};
