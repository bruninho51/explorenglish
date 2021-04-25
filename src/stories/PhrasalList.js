import React from "react"
import styled from "styled-components"
import { IoIosClose } from 'react-icons/io'
import Scrollbars from "react-custom-scrollbars"

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
  overflow: hidden;
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
    border: 1px solid #000;
    &:hover {
      background: #E44352;
      background: rgba(220, 53, 69, 1);
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
  margin: 2px 5px 2px 5px;
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
  padding: 1px;
  border-radius: 5px;
  background: ${props => props.marked ? '#FFDE03' : 'transparent'};
`

const PhrasalListContainerNoContent = styled(PhrasalListContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
`

const EmptyListIcon = () => (
  <img 
      alt="empty" 
      src="noting.png" 
      style={{width: '200px'}}
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
        <EmptyListIcon />
    </PhrasalListContainerNoContent>
  )
}

const VerticalScroll = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 6px;
`

export const PhrasalList = ({ phrases, onDelete }) => {
    return (
      phrases && phrases.length ?
      
        <PhrasalListContainer>
          <Scrollbars renderThumbVertical={() => (<VerticalScroll />)}>
          {phrases.map((phrase) => (
              <Card 
                  key={phrase.uuid} 
                  uuid={phrase.uuid}
                  wordIndex={phrase.wordIndex} 
                  sentence={phrase.sentence} 
                  onDelete={onDelete}
              />
          ))}
          </Scrollbars>
        </PhrasalListContainer>  : <NoContent />)
}