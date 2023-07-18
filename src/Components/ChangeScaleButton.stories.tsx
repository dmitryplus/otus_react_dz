import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ScaleBlock } from './ScaleBlock';

export default {
    title: 'ComponentWithState/Calculator/Button',
    component: ScaleBlock,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof ScaleBlock>;


const Template: ComponentStory<typeof ScaleBlock> = (args) => <ScaleBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: '2',
};

