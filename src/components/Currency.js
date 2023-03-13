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
        <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
      </select>
      }
    </div>
  );
};

export default Currency;