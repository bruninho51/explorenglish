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

  nextSubtitle() {
    const $this = this
    const index = $this.state.subtitleIndex + 1
    $this.setState({
      ...$this.state,
      subtitle: $this.props.subtitle[index],
      subtitleIndex: index
    })
  }

  showSubtitle() {
    const $this = this
    $this.setState({
      ...$this.state,
      showSubtitle: true
    })
  }

  searchSubtitle(currentTime) {
    const $this = this
    const timestamp = currentTime.getTime()
    const subtitle = $this.props.subtitle.find(subtitle => {
      const start = (new Date(subtitle.start)).getTime() - this.props.balance
      const end = (new Date(subtitle.end)).getTime() - this.props.balance
      return timestamp >= start && timestamp < end
    })
    $this.setState({
      ...$this.state,
      showSubtitle: true,
      subtitle: subtitle,
      subtitleIndex: subtitle.identifier - 1
    })
  }

  componentDidMount() {
    const $this = this

    $this.player = videojs($this.videoNode, $this.props);

    $this.player.on("timeupdate", function(){
      const currentTime = new Date()
      currentTime.setHours(0, 0, 0, 0, 0)
      currentTime.setSeconds(this.currentTime())
      $this.searchSubtitle(currentTime)
    });

    $this.player.on("seeking", function() {
      $this.setState({
        ...$this.state,
        showSubtitle: false,
        subtitle: null,
        subtitleIndex: null
      })
    })
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
              this.props.onSave(word, subtitle)
              this.setState({ edit: false })
              this.player.play()
            }}
        />
      </Center>
    )
  }
}

export { VideoPlayer }