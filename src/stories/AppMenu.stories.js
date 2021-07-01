import React from 'react';

import { MenuApp } from '../widgets/MenuApp'

const configuration = {
  title: 'Example/MenuApp',
  component: MenuApp
};

export default configuration

const Template = (args) => (
  <div style={{height: '200px'}}>
    <MenuApp {...args} />
  </div>
)

export const Menu = Template.bind({});
Menu.args = {
  onHome: () => alert('Home')
};