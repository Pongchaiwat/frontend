import React, { useState } from "react";
import './CustomerInfoForm.css';

const CustomerInfoForm = () => {

    const [enteredCompanyName, setEnteredCompanyName] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredClientNumber, setEnteredClientNumber] = useState('');

    const companyChangeHandler = (event) => {
        setEnteredCompanyName(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    
    const clientNumberChangeHandler = (event) =>{
        setEnteredClientNumber(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const customerData = {
            company_name: enteredCompanyName,
            client_number: enteredClientNumber
        };
        const response = fetch("http://localhost:5000/api/company",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(customerData)
        });
        console.log(customerData);
        console.log(response);
        setEnteredCompanyName('');
        setEnteredDate('');
        setEnteredClientNumber('');
    };
return (
    <form onSubmit={submitHandler}>
        <div className="customer-info__controls">
            <div className="customer-info__control">
                <label>Company Name</label>
                <input type="text" value={enteredCompanyName} onChange={companyChangeHandler}/>
            </div>
            <div className="standard">
                <div className="standard__control">
                <label>Standard</label>
                <select value>
                    <option value="9001">9001</option>
                    <option value="200000-1">200000-1</option>
                    <option value="27001">27001</option>
                </select>
                </div>
            </div>
            <div className="customer-info__control">
                <label>Date of the Audit</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate}  onChange={dateChangeHandler} />
            </div>
            <div className="customer-info__control">
                <label>Client Number</label>
                <input type="text" value={enteredClientNumber} onChange={clientNumberChangeHandler}/>
            </div>
        </div>
            <div className="customer-info__actions">
                <button type="submit">Add New Customer</button>
            </div>
    </form>
)};

export default CustomerInfoForm;