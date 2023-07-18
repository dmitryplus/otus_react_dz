import React, { MouseEventHandler, ReactEventHandler, useEffect, useRef, useState } from 'react';
import * as Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fillStateFromSvg, SvgElement } from '../Redux/svg';
import { Node } from './Svg/Node';
import { Panel } from './Panel';

interface ContainerProps {
}


export const Container: React.FC<ContainerProps> = ({}: ContainerProps) => {

    const [isScroll, setScroll] = useState(false);

    const originalSvg = useSelector(store => store.files.svg);
    const svgParams = useSelector(store => store.svg.params);
    const svgElements = useSelector(store => store.svg.elements);

    const scale = useSelector(store => store.svg.scale);
    const translate = useSelector(store => store.svg.translate);
    const viewBox = useSelector(store => store.svg.viewBox);
    const width = useSelector(store => store.svg.width);
    const height = useSelector(store => store.svg.height);

    const dispatch = useDispatch<any>();

    const containerRef = useRef(null);

    useEffect(() => {

        if (originalSvg != null) {
            dispatch(fillStateFromSvg(originalSvg));
        }

    }, [originalSvg]);


    const Canvas = () => {

        let nodes: (React.ReactElement<any, any> | null)[] = [];

        if (svgElements) {

            svgElements.forEach((item: SvgElement) => {
                nodes.push(Node({params: item}));
            });

        }


        if (svgParams) {

            const transform = 'scale(' + scale + ') translate(' + translate + ')';

            return <svg
                xmlns='http://www.w3.org/2000/svg'
                // viewBox={viewBox}
                width={width + 'pt'}
                height={height + 'pt'}
            >
                <g id={svgParams['id']} className={svgParams['class']} transform={transform}>
                    {nodes.map(item => item)}
                </g>
            </svg>;

        }


        return <p>empty</p>;

    };


    function onMouseDown(e: MouseEventHandler<HTMLDivElement>) {
        setScroll(true);
        containerRef.current.style.cursor = "all-scroll";
    }

    function onMouseUp(e: MouseEventHandler<HTMLDivElement>) {
        setScroll(false);
        containerRef.current.style.cursor = "default";
    }

    function onMouseMove(e: MouseEventHandler<HTMLDivElement>) {
        if (isScroll) {
            containerRef.current.scrollLeft = containerRef.current.scrollLeft - e.movementX;
            containerRef.current.scrollTop = containerRef.current.scrollTop - e.movementY;
        }
    }

    return (
        <>
            <Styles.Container ref={containerRef}
                              onMouseDown={onMouseDown}
                              onMouseUp={onMouseUp}
                              onMouseMove={onMouseMove}
            >
                <Canvas />
            </Styles.Container>
            <Panel />
        </>

    );
};
