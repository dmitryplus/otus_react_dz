import React, { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SvgElement } from '../../Redux/svg';

interface NodeProps {
  params: SvgElement;
}

export const Node: React.FC<NodeProps> = (props: { params: SvgElement }) => {
  let title: string | undefined = '';
  let polygonFill: string | undefined = '';
  let polygonStroke: string | undefined = '';
  let pathFill: string | undefined = '';
  let pathStroke: string | undefined = '';
  let points: string | undefined = '';
  let d: string | undefined = '';
  let strokeWidth: string | undefined = '';

  const textElements: ReactElement[] = [];

  const { params } = props;

  params.children.forEach((item) => {
    if (item.tagName === 'title') {
      title = item.children[0]?.value;
    }

    if (item.tagName === 'polygon') {
      polygonFill = item.properties.fill;
      polygonStroke = item.properties.stroke;
      points = item.properties.points;
    }

    if (item.tagName === 'path') {
      pathFill = item.properties.fill;
      pathStroke = item.properties.stroke;
      d = item.properties.d;

      strokeWidth = item.properties['stroke-width'];
    }

    if (item.tagName === 'text') {
      const key = uuidv4();

      textElements.push(
        <text
          textAnchor={item.properties['text-anchor']}
          x={item.properties.x}
          y={item.properties.y}
          fontFamily={item.properties['font-family']}
          fontSize={item.properties['font-size']}
          fill={item.properties.fill}
          key={key}
        >
          {item.children[0].value}
        </text>,
      );
    }
  });

  let path = <></>;

  if (pathFill === '') {
    pathFill = undefined;
  }

  if (pathStroke === '') {
    pathStroke = undefined;
  }

  if (params.properties?.class === 'edge') {
    path = <path fill={pathFill} stroke={pathStroke} strokeWidth={strokeWidth} d={d} />;
  }

  if (params.properties?.class === 'node' || strokeWidth === '') {
    strokeWidth = undefined;
  }

  if (polygonFill === '') {
    polygonFill = undefined;
  }

  if (polygonStroke === '') {
    polygonStroke = undefined;
  }

  return (
    <g id={params.properties?.id} className={params.properties?.class} key={uuidv4()}>
      <title>{title}</title>
      {path}
      <polygon fill={polygonFill} stroke={polygonStroke} strokeWidth={strokeWidth} points={points} />
      {textElements.map((item) => item)}
    </g>
  );
};
