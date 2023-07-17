import React, { useEffect } from 'react';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fillStateFromSvg, SvgElement } from '../Redux/svg';
import { Node } from './Svg/Node';

interface ContainerProps {
}


export const Container: React.FC<ContainerProps> = ({}: ContainerProps) => {

    const originalSvg = useSelector(store => store.files.svg);
    const svgParams = useSelector(store => store.svg.params);
    const svgElements = useSelector(store => store.svg.elements);

    const scale = useSelector(store => store.svg.scale);
    const translate = useSelector(store => store.svg.translate);
    const viewBox = useSelector(store => store.svg.viewBox);

    const dispatch = useDispatch<any>();

    useEffect(() => {

        if (originalSvg != null) {
            dispatch(fillStateFromSvg(originalSvg));
        }

    }, [originalSvg]);


    const Canvas = () => {

        let nodes = [];

        let edges = [];

        if (svgElements) {

            svgElements.forEach((item: SvgElement) => {
                nodes.push(Node(item));
            });

        }


        if (svgParams) {

            const transform = 'scale(' + scale + ') translate(' + translate + ')';

            return <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={viewBox}
                width={svgParams['width']}
                height={svgParams['height']}
            >
                <g id={svgParams['id']} className={svgParams['class']} transform={transform}>
                    {nodes.map(item => item)}
                </g>
            </svg>;

        }


        return <p>empty</p>;

    };


    return (
        <Styles.Container>
            <Canvas />
        </Styles.Container>
    );
};
