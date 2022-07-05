import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './Buttons.css';

export default function ContainedButtons() {
    return (
        <div class='btn'>
            <Stack direction="row" spacing={20}>
                {/* <Button variant="contained">Predict</Button>
                <Button variant="contained">Analytics View</Button>
                <Button variant="contained">Advanced Search</Button> */}
                <ButtonGroup variant="contained" color="primary">
                    <Button>Predict</Button>
                    <Button>Analytics View</Button>
                    <Button>Advanced Search</Button>
                </ButtonGroup>
                <div class='refresh'>
                    <Button varaint="contained" color="inherit">Refresh</Button>
                </div>
                <div class='search'>
                    <TextField label="Search Customer id" type="search" />
                </div>
                <ButtonGroup variant="contained" color="primary">
                    <Button>Add</Button>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </ButtonGroup>
            </Stack>
        </div>
    );
}


/*
<Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <ButtonGroup variant="contained" color="primary">
                            <Button>Predict</Button>
                            <Button>Analytics View</Button>
                            <Button>Advanced Search</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant='contained'>Refresh</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-search" label="Search Customer id" type="search" />
                    </Grid>
                    <Grid item xs>
                        <ButtonGroup variant="contained" color="primary">
                            <Button variant='contained'>Add</Button>
                            <Button variant='outline'> Edit</Button>
                            <Button>Delete</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Box>
*/