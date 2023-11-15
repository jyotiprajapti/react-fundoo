import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
const Header = styled(AppBar)`
z-index: 1205;
background: #fff;
height: 70px;
box-shadow: inset 0 -1px 0 0 #dadce0

`;

const Heading = styled(Typography)`
color: #5f6368;
font-size: 24px;
margin-left: 25px
`

const HeaderBar = ({ open, handleDrawer }) => {
  const logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/2048px-Google_Keep_icon_%282015-2020%29.svg.png"
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: '20px',
          
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt='logo' style={{width:"3%"}} />
        <Heading>
          Fundoo Notes
        </Heading>
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;