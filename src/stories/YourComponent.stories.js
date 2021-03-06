// YourComponent.stories.js

import React from 'react';
import { YourComponent } from './YourComponent';

// This default export determines where your story goes in the story list
export default {
   title: 'YourComponent',
   component: YourComponent,
};

const Template = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
   /* the args you need here will depend on your component */
   label: "moi"
};