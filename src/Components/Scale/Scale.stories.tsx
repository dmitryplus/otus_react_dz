import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Scale } from "./Scale";
import { store } from "../../Redux/store";
import { Provider } from "react-redux";

export default {
    title: 'Panel/Scale',
    component: Scale,
    decorators:[(Story) => {
        return <Provider store={store}><Story /></Provider>
    }],
} as ComponentMeta<typeof Scale>;


const Template: ComponentStory<typeof Scale> = (args) => <Scale {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

