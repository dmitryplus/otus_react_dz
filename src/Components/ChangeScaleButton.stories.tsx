import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChangeScaleButton } from './ChangeScaleButton';

export default {
    title: 'ComponentWithState/Calculator/Button',
    component: ChangeScaleButton,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof ChangeScaleButton>;


const Template: ComponentStory<typeof ChangeScaleButton> = (args) => <ChangeScaleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: '2',
};

