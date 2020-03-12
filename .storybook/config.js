import { configure } from '@storybook/react';

const loadStories = () => {
  require('../src/index.story.jsx');
}

configure(loadStories, module);
