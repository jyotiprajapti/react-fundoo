import { Box, styled, Grid } from '@mui/material'
import React, { useContext } from 'react'
import Form from './Form';
import NoteCard from './NoteCard';
import { DataContext } from '../context/DataProvider';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


const Notes = () => {
    const { notes } = useContext(DataContext)
    console.log("notes ", notes)
    return (
        <Box sx={{ display: 'flex' }} >
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Form />
                {
                    notes.lenght > 0 ? (
                        <EmptyNotes />
                    ) : (<Grid container style={{ marginTop: 16 }} >
                        {
                            notes.map(item => <NoteCard note={item} />)
                        }
                    </Grid>)
                }
            </Box>
        </Box>
    )
}

export default Notes