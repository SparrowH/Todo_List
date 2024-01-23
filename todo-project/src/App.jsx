import React from 'react'
import { RxActivityLog } from "react-icons/rx";
import Task from './Task';

const App = () => {
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [displayedTasks, setDisplayedTasks] = React.useState([]);
  // const [messages, setMessages] = React.useState([]);

  

  const textAreaChangeHandler = (event) => {
   return setTextAreaValue(event.target.value)
  }


  const AddTaskHandler = () => {
    
      setDisplayedTasks([...displayedTasks, textAreaValue])
      setTextAreaValue('');
    
  }

  
  
  return (
    <div className='flex justify-center'>
        <div className='bg-white m-40 w-[35%] rounded-md p-3 ' >
          <div className='flex justify-between items-center w-[34%] mb-4 '>
            <h1 className='font-bold text-xl'>TO-DO LIST</h1>
            <RxActivityLog className='w-[33px] h-[22px]'/>
          </div>

          <div className='relative'>
            <input type="text" placeholder='Enter your task here...'
            className=' bg-slate-400 rounded-xl w-[90%] h-[43px] text-black
            border-none outline-none p-2 placeholder-black' 
            onChange={textAreaChangeHandler} value={textAreaValue} />
            <button className='bg-orange-700 absolute z-10 right-0 text-white rounded-2xl 
            w-[20%] h-[43px]' onClick={AddTaskHandler} >Add</button>
          </div>
          
          {displayedTasks.length === 0 ? (
            <div>There are no notes yet</div>
          ) : (
            <div className='mt-2 mb-2'>
              <ul>
                <Task text={displayedTasks.map((displayedTask, index) => (
                  <li key={index}>{displayedTask}</li>
                ))} />
              </ul>       
            </div>
          )}


        </div>
    </div>
  )
}

export default App