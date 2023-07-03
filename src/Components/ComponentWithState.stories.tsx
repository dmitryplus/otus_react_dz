import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ComponentWithState } from './ComponentWithState';

export default {
    title: 'ComponentWithState',
    component: ComponentWithState,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof ComponentWithState>;


const Template: ComponentStory<typeof ComponentWithState> = (args) => <ComponentWithState {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

