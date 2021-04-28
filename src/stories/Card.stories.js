import React from 'react';

import { Card } from './Card';

const configuration = {
  title: 'Example/Card',
  component: Card
};

export default configuration

const Template = (args) => <Card {...args} >Bruno</Card>;

export const NoEditable = Template.bind({});
NoEditable.args = {
    key: '1' ,
    uuid: '7205342e-3296-4efb-b8f3-d0cde9b8ec1c',
    wordIndex: 0,
    sentence: 'Every time you breath'
};

export const Deletable = Template.bind({})
Deletable.args = {
    key: '1',
    uuid: '7205342e-3296-4efb-b8f3-d0cde9b8ec1c',
    wordIndex: 0,
    sentence: 'Every time you breath',
    onDelete: (uuid) => {
        alert(`You clicked to delete card ${uuid}`)
    }
}

export const Saving = Template.bind({})
Saving.args = {
    key: '1' ,
    uuid: '7205342e-3296-4efb-b8f3-d0cde9b8ec1c',
    wordIndex: 0,
    sentence: 'Every time you breath',
    status: 'saving'
};

export const Saved = Template.bind({})
Saved.args = {
    key: '1' ,
    uuid: '7205342e-3296-4efb-b8f3-d0cde9b8ec1c',
    wordIndex: 0,
    sentence: 'Every time you breath',
    status: 'saved'
};

export const Failed = Template.bind({})
Failed.args = {
    key: '1' ,
    uuid: '7205342e-3296-4efb-b8f3-d0cde9b8ec1c',
    wordIndex: 0,
    sentence: 'Every time you breath',
    status: 'failed'
};