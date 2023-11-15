import { Box, ClickAwayListener, TextField, styled } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import {v4 as uuid } from 'uuid'
const Container = styled(Box)`
display: flex;
flex-direction: column;
width: 600px;
box-shadow: 0 1px 2px 0 rgb(60 66  67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
padding: 10px 15px;
border-radius: 8px;
border-color: #e0e0e0;
margin-left: 50%;
min-height: 30px
`;

const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {
    const [showTextFeild, setShowTextFeild] = useState(false);
    const [addNote, setAddNote] = useState({...note, id: uuid()})
    const {setNotes} = useContext(DataContext)
    const containerRef = useRef()
    const onTextAreaClick = () => {
        setShowTextFeild(true)
        containerRef.current.style.minHeight = '70px'
    }
    const handleClickAway = () => {
        setShowTextFeild(false)
        containerRef.current.style.minHeight = '30px'
        setAddNote({...note, id: uuid()})
        if(addNote.heading || addNote.text){
            setNotes(prevArr=>[addNote, ...prevArr])
        }   
    }

 const onTextChange=(e)=>{
    let changedNote = {...addNote,[e.target.name]: e.target.value}
    setAddNote(changedNote)
 }


    return (
        <ClickAwayListener onClickAway={handleClickAway} >
            <Container ref={containerRef} >
                {showTextFeild && <TextField
                    placeholder='Title'
                    variant='standard'
                    style={{ marginBottom: 10 }} 
                    onChange={(e)=>onTextChange(e)}
                    name='heading'
                    value={addNote.heading}
                    />}
                <TextField
                    placeholder='Take a note...'
                    multiline
                    variant='standard'
                    onClick={onTextAreaClick}
                    onChange={(e)=>onTextChange(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form;