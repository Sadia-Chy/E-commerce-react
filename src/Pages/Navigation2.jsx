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

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navigation() {
  // const token =  localStorage.getItem("token")
  // const [isLoggedIn,setIsLoggedIn] = useState(false)

  // if(token){
  //   setIsLoggedIn(true)
  // }

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

  return (
    <AppBar position="static">
      <CssBaseline />
      
      <Toolbar>
        <Typography variant="h4">
        <img src={Logo} style={{width:"90px", height:"60px" }} className="App-logo" alt="logo" />
        </Typography>
        
          <div class='ml-10 grid grid-cols-5 gap-4 justify-items-center content-between '>
          
            <Button disableRipple class="text-white font-sans transition-none">
            <Link to="/" >
              Home
            </Link>
            </Button>
                 

            <Button disableRipple class="text-white font-sans">
            <Link to="/login" >
              login
            </Link>
            </Button>
            <Button disableRipple class="text-white font-sans">
            <Link to="/register" >
              register
            </Link>
            </Button>
            
          </div>
          
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;