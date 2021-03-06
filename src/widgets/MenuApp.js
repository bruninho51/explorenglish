import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { CreateMovieDialog } from './CreateMovieDialog'

export const Bar = styled.div`
  box-sizing: border-box;
  width: 4vmax;
  height: 100%;
  background: #F8F8F8;
  padding: 5px;
  border-left: 3px solid #DCDCDC;
  border-right: 3px solid #DCDCDC;
  border-bottom: 3px solid #DCDCDC;
  border-radius: 5px;
  top: 0px;
`

export const MenuApp = ({ onHome }) => {
    const [createMovie, setCreateMovie] = useState(false)

    return (
        <React.Fragment>
            {createMovie ? <CreateMovieDialog onCancel={() => setCreateMovie(false)} onSave={() => alert('movie criado')} /> : <div />}
            <Bar>
                <Button style={{marginTop: '5px'}} onClick={onHome}>
                    <img width="15px" src="home.png" alt="home"/>
                </Button>
                <Button style={{marginTop: '5px'}} onClick={() => setCreateMovie(true)}>+</Button>
            </Bar>
        </React.Fragment>
    )
}