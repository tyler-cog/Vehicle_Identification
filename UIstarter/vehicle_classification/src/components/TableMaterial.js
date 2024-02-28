import * as React from 'react';
import './TableMaterial.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import {useState} from 'react';


function BasicTable(props) {

  const [parked, setParked] = useState(true);
  const [stopped, setStopped] = useState(true);
  const [moving, setMoving] = useState(true);

  // this filter is what is shown when the checkboxes change
  const rowsToDisplay = props.data.filter((item)=> {
    if((parked && item.status === "parked" || parked && item.status === "Parked")) {
      return true;
  }
  if((stopped && item.status === "stopped" || stopped && item.status === "Stopped")) {
      return true;
  }
  if((moving && item.status === "moving" || moving && item.status === "Moving")) {
      return true;
  }
    return false;
  }) 


  // function to jump to that time in the video if any cell in a row is clicked
  const handleCellClick = (time) => (e) => {
      console.log("TIME clicked ", time); // gives the time like 0:37, have to split by ":" and first half is minutes, second half is seconds
      console.log("TIME from component", props.time2); 

      const timeArray = time.split(":");

      // account for hours vs minutes
      if(timeArray.length === 2) {
        const minutes = parseInt(timeArray[0]) * 60;
        const totalSeconds = minutes + parseInt(timeArray[1]);

        // SET the time of the video with the following line
        props.time(totalSeconds);

        // console.log("isready ", props.readyVar); 
        // console.log("TOTAL seconds", totalSeconds); 
      }
      else if(timeArray.length === 3) {
        // if the time includes hours
        const hours = parseInt(timeArray[0]) * 60 * 60;
        const minutes = parseInt(timeArray[1]) * 60;
        const totalSeconds = hours + minutes + parseInt(timeArray[2]);

        // SET the time of the video with the following line
        props.time(totalSeconds);

        // console.log("isready ", props.readyVar); 
        // console.log("TOTAL seconds", totalSeconds); 
      }
  }
 
  // using stuled to style the text on the page
  const Div = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    fontSize: 18,
    textAlign:"center",
  }));
  

  return (
    <>
    <Div>{"Filter Results:"}</Div>

    <Stack direction="row" spacing={2} sx={{ 
          '& .MuiSvgIcon-root': { fontSize: 20 }, 
          '& .MuiFormControlLabel-label': { fontSize: '14px' }, 
          position: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems:'center'
          }}>
      <FormGroup sx={{ 
          '& .MuiSvgIcon-root': { fontSize: 20 }, 
          '& .MuiFormControlLabel-label': { fontSize: '14px' }, 
          position: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems:'center'
          }} >
        <FormControlLabel  control={
          <Checkbox defaultChecked />
          } checked={parked} onChange={()=> setParked(!parked)} label="Parked" />
        <FormControlLabel control={
          <Checkbox defaultChecked />
          } checked={stopped} onChange={()=> setStopped(!stopped)} label="Stopped" />
        <FormControlLabel control={
          <Checkbox defaultChecked />
          } checked={moving} onChange={()=> setMoving(!moving)} label="Moving" />
      </FormGroup>
    </Stack>
    
    <br></br>

    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow 
          sx={{
            borderBottom: "1.5px solid black",
            "& th": {
              fontSize: "1.5rem",
              color: "rgba(96, 96, 96)"
            }
          }} >
            <TableCell align="center">Car ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsToDisplay.map((row) => (
            <TableRow
              onClick={() => handleCellClick(row.time)}
              key={row.name}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                "& td, th": {
                  fontSize: "1.35rem",
                  color: "rgba(96, 96, 96)"
                }
              }}
            >
              <TableCell align="center" component="th" scope="row"  onClick={handleCellClick(row.time)}>{row.tracker_id}</TableCell>
              <TableCell align="center"  onClick={handleCellClick(row.time)}>{row.status}</TableCell>
              <TableCell align="center" onClick={handleCellClick(row.time)}>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
}

export default BasicTable
