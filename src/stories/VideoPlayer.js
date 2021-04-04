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
      edit: false,
      subtitle: this.props.subtitle[0],
      subtitleIndex: 0,
      showSubtitle: false
    }
  }

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });

    const $this = this
    this.player.on(
      "timeupdate", 
      function(event){

        const current = new Date()
        current.setHours(0, 0, 0, 0, 0)
        current.setSeconds(this.currentTime())

        const start = new Date($this.state.subtitle.start)
        const end = new Date($this.state.subtitle.end)

        if (current > start && current < end) {
          $this.setState({
            ...$this.state,
            showSubtitle: true
          })
        } else if (current > end) {
          $this.setState({
            ...$this.state,
            showSubtitle: false,
            subtitle: $this.props.subtitle[$this.state.subtitleIndex + 1],
            subtitleIndex: $this.state.subtitleIndex + 1
          })
        }

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
            subtitle={this.state.showSubtitle ? this.state.subtitle.subtitle : ''}
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