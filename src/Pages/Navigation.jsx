import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  // makeStyles,
} from "@mui/material";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Logo from './logo.webp'


import { useNavigate } from "react-router-dom";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navigation() {
  

const [anchorElUser, setAnchorElUser] = React.useState(null);
const [open, setOpen] = React.useState(true);

  
const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};
const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};

const logoutHandler =()=>{
  localStorage.removeItem("token")
  navigate('/')
}

const navigate = useNavigate()
const profileHandler =()=>{
  navigate('/profile')
}

const accountHandler =()=>{
  navigate('/account')
}

  return (
    <AppBar position="static">
      <CssBaseline />
      
      <Toolbar>
        <Typography variant="h4" class="rounded-full" >
        <img src={Logo} style={{width:"200px", height:"60px" }}className="App-logo" alt="logo" />
        </Typography>
        
          <div class='ml-10 grid grid-cols-5 gap-4 justify-items-center content-between '>
          
            <Button disableRipple class="text-white font-sans transition-none">
            <Link to="/" >
              Home
            </Link>
            </Button>
            
            <Button
                  id="basic-button"
                  aria-controls={open2 ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? 'true' : undefined}
                  onClick={handleClick}
                  class="text-white font-sans"
                  disableRipple
                >
                  <div class="grid grid-cols-2 gap-16">
                  <Link to="/categories">
                    Categories
                  </Link>
                  <KeyboardArrowDownSharpIcon/>
                  </div>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open2}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Shoes</MenuItem>
                  <MenuItem onClick={handleClose}>Electronics</MenuItem>
                  <MenuItem onClick={handleClose}>Households</MenuItem>
                </Menu>

            <Button disableRipple class="text-white font-sans">
            <Link to="/about" >
              About
            </Link>
            </Button>
            <Button disableRipple class="text-white font-sans">
            <Link to="/order" >
              Order
            </Link>
            </Button>
            
          </div>
          <Box sx={{ flexGrow: 0,marginLeft:'60%' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
                <MenuItem class="flex flex-col px-3.5 py-2 " onClick={handleCloseUserMenu}>
                   <Button disableRipple  class="text-stone-950" onClick={profileHandler} textAlign="center">Profile</Button>
                   <Button disableRipple class="text-stone-950" onClick={accountHandler} textAlign="center">Account</Button>
                   <Button disableRipple class="text-stone-950" onClick={logoutHandler} textAlign="center">Logout</Button>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;