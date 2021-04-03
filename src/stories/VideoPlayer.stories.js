import { VideoPlayer } from "./VideoPlayer";

const configuration = {
    title: 'Example/VideoPlayer',
    component: VideoPlayer
  };
  
export default configuration

const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: 'pneumonia.mp4'
    }]
  }
  
const Template = (args) => {
  return (
    <div style={{width: '800px', height: '100px'}}>
      <VideoPlayer {...args} />
    </div>
  )
}

export const Video = Template.bind({})
Video.args = videoJsOptions