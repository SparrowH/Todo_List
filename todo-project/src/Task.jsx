import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Task = (props) => {
  const [checked, setChecked] = React.useState(false);

  const cancelHandler = () => {
    props.onCancel(props.index);
  };

  const checkedHandler = () => {
    setChecked(!checked);
  };

  return (
    <div className='flex bg-white'>
      <div className='flex-none mr-4'>
        <input
          type='checkbox'
          checked={checked}
          onChange={checkedHandler}
        />
      </div>
      <div className='flex-1 mr-2'>
        <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>{props.text}</p>
      </div>
      <div className='flex-none'>
        <button onClick={cancelHandler}>
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
