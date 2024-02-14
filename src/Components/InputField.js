import React, { Fragment } from 'react';

function InputField({ id, inputChange, type, name, placeholder }) {
    const halls = [
        {id:0,value:"Select"},
        { id: 1, value: "Shaheed Salam Barkat Hall" },
        { id: 2, value: "Shaheed Rafiq Jabbar Hall" },
        { id: 3, value: "Shaheed Abdul Malek Hall" },
        { id: 4, value: "Shaheed Ahsanullah Master Hall" },
    ];


    return (
        <Fragment>
            {
                type && type !== "select" && (
                    <Fragment>
                        <label className="regiLabel" htmlFor={id}>{placeholder}</label>
                        <input
                            className="form-control my-1 regiLabel"
                            type={type}
                            onChange={inputChange}
                            name={name}
                            id={id}
                            placeholder={placeholder}
                        />
                    </Fragment>
                )
            }
            {
                type && type === "select" && (
                    <Fragment>
                        <label className="regiLabel" htmlFor={id}>{placeholder}</label>
                        <select
                            className="form-control my-1"
                            onChange={inputChange}
                            name={name}
                            id={id}
                        >
                            {
                                halls.map((option)=> (
                                    <option key={option.id} value={option.value}>{option.value}</option>
                                ))
                            }
                        </select>
                    </Fragment>
                )
            }
        </Fragment>
    );
}

export default InputField;
