import "../styles/MainForm.css"
import {FormEvent, useState} from "react";
import ConfirmationControlledPopup from "./ConfirmationControlledPopup";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function MainForm() {
    const [startDate, setStartDate] = useState(new Date())
    const [birthDate, setBirthDate] = useState(new Date())

    function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('Form submitted')
    }

    return (
        <form id="main-form" onSubmit={submitHandler}>
            <label>First Name</label>
            <input type="text" id="first-name" />

            <label>Last Name</label>
            <input type="text" id="last-name" />

            <label>Date of Birth</label>
            <DatePicker id="birth-date" onChange={((date : Date) => setBirthDate(date))} selected={birthDate} />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker id="start-date" selected={startDate} onChange={((date : Date) => setStartDate(date))}/>

            <fieldset id="address-field">
                <legend>Address</legend>

                <label>Street</label>
                <input id="street" type="text"/>

                <label htmlFor="city">City</label>
                <input id="city" type="text"/>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number"/>
            </fieldset>

            <ConfirmationControlledPopup />
        </form>
    )
}

export default MainForm