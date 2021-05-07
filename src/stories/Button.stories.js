import React from 'react';

import { Button } from '../widgets/Button';

const configuration = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    
  },
};

export default configuration

const Template = (args) => <Button {...args} >Bruno</Button>;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  size: 'small',
  block: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  theme: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  theme: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning'
};

export const Info = Template.bind({});
Info.args = {
  theme: 'info'
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light'
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Block = Template.bind({});
Block.args = {
  block: true
};