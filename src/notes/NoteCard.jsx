import React, {useContext} from 'react'
import { Card, CardActions, CardContent, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteForeverOutlined as Delete } from '@mui/icons-material'
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
width: 240px;
margin: 8px;
box-shadow: none;
border: 1px solid #e0e0e0;
border-radius: 8px;
box-shadow: none

`;

const NoteCard = ({ note }) => {
    const {notes, setNotes, setArchiveNotes, setDeleteNotes} = useContext(DataContext)
    const archiveNote = (note)=>{
const updatedNotes = notes.filter(data=>data.id !== note.id)
setNotes(updatedNotes)
setArchiveNotes(prevArr=>[notes,...prevArr ])
    }
    const deleteNote = () =>{
        const updatedNotes = notes.filter(data=>data.id !== note.id)
        setNotes(updatedNotes)
        setDeleteNotes(prevArr=>[notes,...prevArr ])
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive fontSize='small' style={{marginLeft: 'auto'}}
                onClick = {()=>archiveNote(note)}
                />
                <Delete fontSize='small' style={{marginLeft: 'auto'}}
                onClick = {()=>deleteNote(note)}
                />
            </CardActions>

        </StyledCard>
    )
}

export default NoteCard;