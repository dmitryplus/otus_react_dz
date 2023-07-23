import React from 'react';
import { useSelector } from 'react-redux';
import { SvgElement } from '../../Redux/svg';
import { Node } from '../Svg/Node';
import { State } from '../../Types';

export const Canvas = () => {
  const svgParams = useSelector((store: State) => store.svg.params);
  const svgElements = useSelector((store: State) => store.svg.elements);

  const scale = useSelector((store: State) => store.svg.scale);
  const translate = useSelector((store: State) => store.svg.translate);
  const width = useSelector((store: State) => store.svg.width);
  const height = useSelector((store: State) => store.svg.height);

  const nodes: (React.ReactElement<any, any> | null)[] = [];

  if (svgElements) {
    svgElements.forEach((item: SvgElement) => {
      nodes.push(Node({ params: item }));
    });
  }

  if (svgParams) {
    const transform = `scale(${scale}) translate(${translate})`;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width}pt`} height={`${height}pt`}>
        <g id={svgParams.id} className={svgParams.class} transform={transform}>
          {nodes.map((item) => item)}
        </g>
      </svg>
    );
  }

  return <p>empty</p>;
};

Canvas.displayName = 'Canvas';