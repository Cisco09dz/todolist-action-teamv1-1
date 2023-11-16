import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Chip , Avatar } from '@mui/material';
import './App.css'
import Goaltable from './component/goaltable/table';
import Input from './component/input/input';
import { useState } from 'react';


const App = ()=>{
 const [data , setdata]=useState([]);


 const submit =(value)=>{
  setdata(prevState => 
    {  return [ 
      ...prevState,
      {id: crypto.randomUUID(), goal:value , date:new Date() .toUTCString() , completed:false}
    ]}
      );
      
};


  return (
    
    <div className='w-full h-full'>
       <div className='w-2/3 mx-auto my-3'>
         
            <h1 className=' flex items-center text-2xl text-blue-600 font-bold p-3'>
              <span className='mr-2'>to do list app</span>
              <Chip
              size='small'
              color='primary'
               avatar={<Avatar src='https://th.bing.com/th/id/OIP.8crMZH-4uR1-cBNC3g5cfAHaHw?pid=ImgDet&rs=1'/>}
                label="home work" />
            </h1>
            <div className='py-3'>
          <Input subfc={submit }  />
          </div>
            <Goaltable data={data} />


       </div>


    </div>
    
    
  )
 
 
}

export default App
