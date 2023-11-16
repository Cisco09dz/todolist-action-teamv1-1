import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
















const Goaltable=({data})=>{
    return(
        
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">completed</TableCell>
            <TableCell align="center">goal</TableCell>
            <TableCell align="center">date</TableCell>
            <TableCell align="center">actions</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length<=0 &&(
            <TableRow>
              <TableCell align="center" colSpan={4} >
              <p className="font-bold text-lg text-center"> no goals at the moment</p>
              </TableCell>
            </TableRow>
          )}
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
              <Checkbox  defaultChecked />
              </TableCell>
              <TableCell align="center">{row.goal}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
              <IconButton aria-label="delete">
                   <CreateIcon />
                 </IconButton>
                 <IconButton aria-label="delete">
                   <DeleteIcon />
                 </IconButton>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      

    );
};
export default Goaltable;