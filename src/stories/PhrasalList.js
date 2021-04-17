import React from "react"
import styled from "styled-components"
import { IoIosClose } from 'react-icons/io'
import { RiEmotionSadLine } from 'react-icons/ri'

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
  padding: 5px 50px 5px 10px;
  font: 24px Roboto, sans-serif;
  text-align: center;
  margin: 5px 0px 5px 0px;
`

export const DeleteButton = styled.div`
    width: 32px;
    height: 32px;
    font-size: 24px;
    border-radius: 200px;
    background-color: rgba(128,128,128,0.4);
    &:hover {
    background: rgba(128,128,128,0.5);
  }
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const RelativeBox = styled.div`
  position: relative;
`

export const Card = ({ wordIndex, sentence, uuid, onDelete }) => {
    const words = extractWordsFromSentence(sentence)
    return (
        <RelativeBox>
            <CardStyle>
                {words.map((word, index) => {
                    return <MarkableWord key={index} marked={index === wordIndex} >{word}</MarkableWord>
                })}
            </CardStyle>
            <DeleteButton onClick={() => { onDelete(uuid) }}>
                <IoIosClose />
            </DeleteButton>
      </RelativeBox>
    )
    
}

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

const PhrasalListContainerNoContent = styled(PhrasalListContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
`

const DesertIcon = () => (
  <img 
      alt="empty" 
      src="desert.png" 
      style={{width: '100px'}}
    />
)

const PhrasalListMessage = ({ children }) => (
  <span 
    style={{
      fontSize: '24px', 
      fontFamily: 'Arial', 
      paddingBottom: '20px'
    }}>
      {children}
  </span>
)

const NoContent = () => {
  return (
    <PhrasalListContainerNoContent>
        <DesertIcon />
        <PhrasalListMessage>
          There's no content here!
        </PhrasalListMessage>
    </PhrasalListContainerNoContent>
  )
}

export const PhrasalList = ({ phrases, onDelete }) => {
    return (
      phrases && phrases.length ?
        <PhrasalListContainer>
          {phrases.map((phrase) => (
              <Card 
                  key={phrase.uuid} 
                  uuid={phrase.uuid}
                  wordIndex={phrase.wordIndex} 
                  sentence={phrase.sentence} 
                  onDelete={onDelete}
              />
          ))}
        </PhrasalListContainer>  : <NoContent />)
}