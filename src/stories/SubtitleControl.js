import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Button } from "./Button";

export const TrackBase = styled.div`
  box-sizing: border-box;
  width: 620px;
  height: 100px;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0px 5px 15px 0px;
  display: flex;
  justify-content: center;
  word-wrap: wrap;
  align-items: center;
  font-size: 24px;
  font-family: Roboto, sans-serif;
  text-align: center;
  padding: 20px;
`

const WordBase = styled.div`
  color: ${props => props.selected ? 'pink' : 'black'};
  display: block;
  margin-left: 7px;
`

const Word = ({children}) => {
    const [selected, setSelected] = useState(false)
    return (
        <WordBase selected={selected} onClick={() => setSelected(true)}>{children}</WordBase>
    )
}

const TrackEdit = ({ children }) => {
    const words = children.split(' ')
    return (
      <TrackBase>
          {words.map(word => {
            return <Word>{word}</Word>
          })}
      </TrackBase>
    )
}

const TrackNoEdit = ({ edit, children }) => {
    const words = children.split(' ')
    return (
      <TrackBase>
          {words.map(word => {
            return <div style={{display: 'block', marginLeft: '7px'}}>{word}</div>
          })}
      </TrackBase>
    )
}

const Track = ({ edit, children }) => {
    return edit 
      ? <TrackEdit children={children} /> 
      : <TrackNoEdit children={children} />
}

export const ExternalContainer = styled.div`
  box-sizing: border-box;
  width: 640px;
  height: 130px;
  background: #F8F8F8;
  border-left: 3px solid #DCDCDC;
  border-top: 3px solid #DCDCDC;
  border-right: 3px solid #DCDCDC;
  ${props => !props.edit && css`
    border-bottom: 3px solid #DCDCDC;
  `}
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const slidein = keyframes`
    from {
      top: 0;
    }
  
    to {
      top: 60px;
    }
`

export const Actions = styled.div`
  box-sizing: border-box;
  width: 640px;
  height: 130px;
  background: #FFF;
  border-radius: 5px;
  background: #F8F8F8;
  border: 3px solid #DCDCDC;
  align-items: bottom;
  font-family: Roboto sans-serif;
  text-align: center;
  padding: 20px;
  position: absolute;
  top: 60px;
  z-index: -1;
  ${props => {
      if (props.edit) {
        return css`
          animation: ${slidein} 2s;
        `
      } else {
        return css`
          top: 0px;
        `
      }
  }}
}
`

const ActionFooter = styled.footer`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const RelativeBox = styled.div`
  position: relative;
`

export const SubtitleControl = ({ edit }) => {
    return (
        <RelativeBox>
            <ExternalContainer edit={edit}>
                <Track edit={edit}>
                    Bruno Mendes. Igor Almeida.
                </Track>
            </ExternalContainer>
            <Actions edit={edit} >
                <ActionFooter>
                    <Button theme="danger">Cancelar</Button>
                    <Button theme="success">Salvar</Button>
                </ActionFooter>
            </Actions>
        </RelativeBox>
    )
}
