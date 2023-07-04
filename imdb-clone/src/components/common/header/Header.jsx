import React from 'react'

import { useState } from 'react';

import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';

import { logoURL } from '../../../constants/constant';

//components
import HeaderMenu from './HeaderMenu';
import { routhPath } from '../../../constants/route';
import { Navigate, useNavigate } from 'react-router-dom';

//here both styled and toolbar are material ui components thus defined already
const StyledToolbar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between; 
    & > *{
        padding: 0 16px;
    }
    & > div{
        display: flex;
        align-item: center;
        cursor-pointer: pointer;
        & > p {
            font-size: 14px;
            font-weight: 600px;
        }
    }
    & > p{
        font-size: 14px;
        font-weight: 600px;
    }

`;
// so that evenly space aa jae saare components ke beech
//whenever we use html component with defined material ui component we need to put it in inverted commas
const Logo = styled('img')({
    width: 64
})

const InputSearchField = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Header = () => {
    const [open, setOpen] = useState(null);

    const navigate = useNavigate(); 

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    const handleClose = () =>{
        setOpen(null);
    }

    return (
        <AppBar position='static'>
            <StyledToolbar>
                {/* <img src={logoURL} alt="logo" /> */}
                {/* when click on imdb icon it is directed to home page */}
                <Logo src={logoURL} alt="logo" onClick={()=> navigate(routhPath.home)}/>
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />
                <InputSearchField />
                <Typography>IMDb<Box component="span">Pro</Box></Typography>
                {/* we are wrapping it inside the box ie. div bcz text v hai icon ke saath */}
                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
