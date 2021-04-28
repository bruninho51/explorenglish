import { PhrasalList } from "./PhrasalList";
import { v4 as uuidv4 } from "uuid";


const configuration = {
  title: 'Example/PhrasalList',
  component: PhrasalList
};

export default configuration

const Template = (args) => (
    <div style={{height: '500px', width: '1200px'}}>
        <PhrasalList {...args} />
    </div>
)

export const Content = Template.bind({})
Content.args = {
    phrases: [{
        uuid: uuidv4(),
        wordIndex: 1,
        sentence: 'lorem ipsum',
        word: 'ipsum'
    }, {
        uuid: uuidv4(),
        wordIndex: 0,
        sentence: 'dolor sit amet',
        word: 'dolor'
    }],
    onDelete: (uuid) => { alert(uuid) }
}

export const NoContent = Template.bind({})
NoContent.args = {
    onDelete: (uuid) => { alert(uuid) }
}