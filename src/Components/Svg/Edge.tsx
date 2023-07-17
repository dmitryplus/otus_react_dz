import React, { FC } from 'react';
import { SvgElement } from '../../Redux/svg';


export const Edge: FC = (params: SvgElement) => {


    //console.log(params);

    return <g id='{params.properties?.id}' className='{params.properties?.class}'>
    </g>;

};