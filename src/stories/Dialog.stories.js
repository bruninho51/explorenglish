import React from 'react';

import { Dialog } from '../widgets/Dialog';

const configuration = {
  title: 'Example/Dialog',
  component: Dialog
};

export default configuration

const Template = (args) => <Dialog {...args} />

export const Confirmation = Template.bind({});
Confirmation.args = {
    title: "Hello!",
    labelBtn1: "Yes",
    labelBtn2: "No",
    onClickBtn1: () => alert('You chose yes'), 
    onClickBtn2: () => alert('You chose no'),
    children: 'Please click yes or no'
};

export const Information = Template.bind({})
Information.args = {
    title: "Hello!",
    labelBtn1: "Ok",
    onClickBtn1: () => alert('You clicked ok'), 
    children: 'This is an information dialog!'
}
