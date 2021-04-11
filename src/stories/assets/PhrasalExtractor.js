import React, { useState } from "react"
import styled from "styled-components"
import VideoPlayer from "../VideoPlayer"

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 95vmin;
  background: #F8F8F8;
  border-left: 3px solid #DCDCDC;
  border-right: 3px solid #DCDCDC;
  padding:  5px 5px 5px 5px;
  border-bottom: 3px solid #DCDCDC;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`

const Section = styled.section`
  box-sizing: border-box;
  min-height: 100px;
  background: #DCDCDC;
  border-left: 3px solid #DCDCDC;
  border-right: 3px solid #DCDCDC;
  padding: 5px 5px 5px 5px;

  border-bottom: 3px solid #DCDCDC;
  border-radius: 5px;
  display: flex;
`

const PhrasalListContainer = styled(Section)`
  width: 40%;
  display: block;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const CardStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0px 5px 15px 0px;
  padding: 5px;
  font: 24px Roboto, sans-serif;
  text-align: center;
  margin: 5px 0px 5px 0px;
`

const extractWordsFromSentence = (sentence) => {
    return sentence.split(' ').map(word => word.trim()).filter(word => !!word)
}


const Word = styled.span`
  display: inline-block;
  margin-left: 7px;
`

const MarkableWord = styled(Word)`
  background: ${props => props.marked ? 'yellow' : 'transparent'};
`

export const Card = ({ wordIndex, sentence }) => {
    const words = extractWordsFromSentence(sentence)
    return (
      <CardStyle>
          {words.map((word, index) => {
            return <MarkableWord key={index} marked={index === wordIndex} >{word}</MarkableWord>
          })}
      </CardStyle>
    )
    
}

const VideoContainer = styled(Section)`
  width: 59%;
  height: 80vmin;
  flex-direction: column;
  z-index: 1;
  background: transparent;
  border: 0px;
`

const SizedBox = styled.div`
  height: ${props => props.height};
  width: 100%;
  z-index: -2;
`

export const PhrasalExtractor = (props) => {

    const [phrases, setPhrases] = useState([])

    return (
        <Container>
            <PhrasalListContainer>
                {phrases.map(phrase => <Card wordIndex={phrase.wordIndex} sentence={phrase.sentence} />)}
            </PhrasalListContainer>
            <VideoContainer>
                <VideoPlayer 
                    {...props.videoPlayer } 
                    onSave={(word, subtitle) => {
                        const newWord = {
                            wordIndex: word,
                            sentence: subtitle,
                            word: extractWordsFromSentence(subtitle)[word]
                        }
                        console.log(newWord)
                        setPhrases([...phrases, newWord])
                        if (props.videoPlayer.onSave) 
                            props.videoPlayer.onSave(word, subtitle)
                    }}
                />
                <SizedBox height="120px" />
            </VideoContainer>
        </Container>
    )
}
