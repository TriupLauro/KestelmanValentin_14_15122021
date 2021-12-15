import "../styles/MainForm.css"
import {FormEvent} from "react";
import ConfirmationControlledPopup from "./ConfirmationControlledPopup";

function MainForm() {
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