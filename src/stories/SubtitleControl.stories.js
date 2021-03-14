import { SubtitleControl } from "./SubtitleControl";

const configuration = {
  title: 'Example/Subtitle',
  component: SubtitleControl
};

export default configuration

const Template = (args) => <SubtitleControl {...args} />

export const NoEditable = Template.bind({})

NoEditable.args = {
  edit: false
}

export const Editable = Template.bind({})
Editable.args = {
  edit: true
}