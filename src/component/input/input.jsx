import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


const Input=({subfc})=>{
    const [inputValue,setinputValue]=useState('');
    
    
    const onChange=(event)=>{
        setinputValue(event.target.value);
          
    }




    const sendvalue=()=>{
        subfc(inputValue)
        setinputValue("")
    }
    return(

     
             <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="entre your new goal"
        onChange={onChange}
        value={inputValue}
      />
     
     
      <IconButton onClick={sendvalue} color="primary" sx={{ p: '10px' }} aria-label="directions">
        <AddIcon  />
      </IconButton>
    </Paper>
       
    );
};
export default Input