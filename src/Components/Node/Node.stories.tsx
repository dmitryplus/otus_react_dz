import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Node } from "./Node";

const paramsNode1 = JSON.parse('{"params":{"type":"element","tagName":"g","properties":{"id":"node1","class":"node"},"children":[{"type":"element","tagName":"title","properties":{},"children":[{"type":"text","value":"N0"}]},{"type":"element","tagName":"polygon","properties":{"fill":"#ff0000","stroke":"#000000","points":"554.8605,-73.8091 554.8605,-178.1909 392.3592,-252 162.5478,-252 .0465,-178.1909 .0465,-73.8091 162.5478,0 392.3592,0 554.8605,-73.8091"},"children":[]},{"type":"element","tagName":"text","properties":{"text-anchor":"middle","x":277.4535,"y":-178.5,"font-family":"Times,serif","font-size":35,"fill":"#000000"},"children":[{"type":"text","value":"Total: 0.006 ms"}]},{"type":"element","tagName":"text","properties":{"text-anchor":"middle","x":277.4535,"y":-136.5,"font-family":"Times,serif","font-size":35,"fill":"#000000"},"children":[{"type":"text","value":"main()"}]},{"type":"element","tagName":"text","properties":{"text-anchor":"middle","x":277.4535,"y":-94.5,"font-family":"Times,serif","font-size":35,"fill":"#000000"},"children":[{"type":"text","value":"Excl: 0.006 ms (100.0%)"}]},{"type":"element","tagName":"text","properties":{"text-anchor":"middle","x":277.4535,"y":-52.5,"font-family":"Times,serif","font-size":35,"fill":"#000000"},"children":[{"type":"text","value":"1 total calls"}]}]}}');

const paramsEdge1 = JSON.parse('{"params":{"type":"element","tagName":"g","properties":{"id":"edge1","class":"edge"},"children":[{"type":"element","tagName":"title","properties":{},"children":[{"type":"text","value":"N1&#45;&gt;N0"}]},{"type":"element","tagName":"path","properties":{"fill":"none","stroke":"#c0c0c0","stroke-width":10,"d":"M438.9266,-175.8426C428.4933,-163.5851 417.8223,-151.0482 407.5509,-138.9809"},"children":[]},{"type":"element","tagName":"polygon","properties":{"fill":"#c0c0c0","stroke":"#c0c0c0","stroke-width":10,"points":"420.6217,-127.3377 394.332,-123.4506 393.9691,-150.0235 420.6217,-127.3377"},"children":[]},{"type":"element","tagName":"text","properties":{"text-anchor":"middle","x":450.2642,"y":-145.4,"font-family":"Times,serif","font-size":14,"fill":"#000000"},"children":[{"type":"text","value":"1000 calls"}]},{"type":"element","tagName":"text","properties":{"text-anchor":"middle","x":376.2517,"y":-127.6506,"font-family":"Times,serif","font-size":14,"fill":"#000000"},"children":[{"type":"text","value":"99.9%"}]},{"type":"element","tagName":"text","properties":{"text-anchor":"middle","x":420.8463,"y":-163.2426,"font-family":"Times,serif","font-size":14,"fill":"#000000"},"children":[{"type":"text","value":"27.4%"}]}]}}');

export default {
    title: 'Svg/Node',
    component: Node,
    decorators:[(Story) => {
         return (
           <svg xmlns="http://www.w3.org/2000/svg" width="563pt" height="260pt">
             <g id="graph0" transform="scale(1) translate(4 260)">
               <Story />
             </g>
           </svg>
         );
    }],
} as ComponentMeta<typeof Node>;


const Template: ComponentStory<typeof Node> = (args) => <Node {...args} />;

export const Primary = Template.bind({});
Primary.args = paramsNode1;

export const Secondary = Template.bind({});
Secondary.args = paramsEdge1;

