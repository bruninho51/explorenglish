import React from 'react';

import { CreateMovieDialog } from '../widgets/CreateMovieDialog';

const configuration = {
  title: 'Example/CreateMovieDialog',
  component: CreateMovieDialog
};

export default configuration

const Template = (args) => <CreateMovieDialog {...args} />

export const Form = Template.bind({});
Form.args = {};