import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, MoneyType} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{MoneyType}{props.quantity}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleDeleteItem}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaMinusCircle></td>
        {/* <td>{MoneyType}{parseInt(props.unitprice)}</td>
        <td>{MoneyType}{parseInt(props.quantity)*parseInt(props.unitprice)}</td> */}
        <td><FaTimesCircle size='1em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>

        </tr>
    );
};

export default ExpenseItem;