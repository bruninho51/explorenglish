import { SubtitleControl } from "../widgets/SubtitleControl";

const configuration = {
  title: 'Example/Subtitle',
  component: SubtitleControl
};

export default configuration

const Template = (args) => <SubtitleControl {...args} />

export const NoEditable = Template.bind({})

NoEditable.args = {
  edit: false,
  subtitle: 'Every time you breathe in, air travels down the trachea,',
  onCancel: () => { alert('should set edit equal false') },
  onSave: (word, subtitle) => { alert(`word: ${word}\n subtitle: ${subtitle}`) }
}

export const Editable = Template.bind({})
Editable.args = {
  edit: true,
  subtitle: 'Every time you breathe in, air travels down the trachea,',
  onCancel: () => { alert('should set edit equal false') },
  onSave: (word, subtitle) => { alert(`word: ${word}\n subtitle: ${subtitle}`) }
}