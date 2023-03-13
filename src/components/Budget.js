import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Budget: $ {
      <input 
        name="Budget" 
        id="Budget" 
        type='number'
        max='20000'
        step='10'
        onChange={event=>changeLocation(event.target.value)}>
      </input>	
      }	
    </div>
    );
};

export default Location;