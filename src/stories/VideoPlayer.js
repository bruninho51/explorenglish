import React from 'react';
import styled from 'styled-components';
import videojs from 'video.js'
import { SubtitleControl } from './SubtitleControl'
import 'video.js/dist/video-js.css'
import '@videojs/themes/dist/sea/index.css';

export const Center = styled.p`
  box-sizing: border-box;
  width: 90%;
  min-height: 100px;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0px 5px 15px 0px;
  padding: 5px;
  font: 24px Roboto, sans-serif;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export default class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <Center>
        <div data-vjs-player>
          <video 
            style={{width: '100%', marginBottom: '5px'}} 
            ref={ node => this.videoNode = node }
            className="video-js vjs-theme-sea"
          />
        </div>
        <SubtitleControl 
            subtitle="allowing oxygen from the air we breathe into the bloodstream"
            edit={this.state.edit}
            onClick={() =>{
              this.player.pause()
              this.setState({ edit: true })
            }}
            onCancel={() => {
              this.player.play()
              this.setState({ edit: false })
            }}
            onSave={(word, subtitle) => {
                alert(word)
                this.setState({ edit: false })
                this.player.play()
            }}
        />
      </Center>
    )
  }
}

export { VideoPlayer }