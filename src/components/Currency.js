import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeMoneyType = (val)=>{
    dispatch({
        type: 'CHG_MONEYTYPE',
        payload: val,
    })
  }

  return (

    <div className='dropdown'> Currency {
      <select name="Currency" id="Currency" 
        onChange={event=>{
          changeMoneyType(event.target.value);
          }}>
        <option value="$">($) Dollar</option>
        <option value="£">(£) Pound</option>
        <option value="₹">(₹) Rupee</option>
        <option value="€">(€) Euro</option>
      </select>
      }
    </div>
  );
};

export default Currency;