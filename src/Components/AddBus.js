import React from 'react';

function AddBus({busName,options}) {
    return (
        <div className="my-2">
            <label className="busLabel mx-3" htmlFor={busName}>{busName}</label>
            <select className="selectBg" name={busName} id={busName}>
                {
                   options.map((option)=>(
                       <option value={option.value}>{option.label}</option>
                   ))
                }

            </select>
        </div>
    );
}

export default AddBus;
