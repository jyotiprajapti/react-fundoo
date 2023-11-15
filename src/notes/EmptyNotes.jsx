import React from 'react'
import {Box,   Typography} from '@mui/material';
import {LightbulbOutlined as LightBulb} from '@mui/icons-material'
import {styled} from '@mui/material/styles'

const Light = styled(LightBulb)`
font-size: 120px;
color: #F5F5F5
`;

const Text = styled(Typography)`
font-size:22px;
color: #80868b
`;

const Container = styled(Box)`

margin-top: 20vh;
margin-left: 60vh
`;

const EmptyNotes=()=> {
  return (
    <Container>
        <Light/>
        <Text>Notes that you add Appear here</Text>
    </Container>
  )
}

export default EmptyNotes