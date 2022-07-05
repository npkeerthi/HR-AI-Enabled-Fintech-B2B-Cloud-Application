import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './logo.svg';
import H2h from './h2h.svg';
import './Header.css';
import { height, maxHeight } from '@mui/system';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={
        {
          background: "#2D4250"
        }
      }>
        <div className="App" >
          <Toolbar>
            <img class="h2h" src={H2h} />
            <img class="logo" src={Logo} />

          </Toolbar>
        </div>
        <br />
        <p class="head"><h2>Invoice List</h2></p>
      </AppBar>
    </Box>
  );
}
