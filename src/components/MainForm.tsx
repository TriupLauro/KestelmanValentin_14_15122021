import "../styles/MainForm.css"
import {ChangeEvent, FormEvent, useState} from "react";
import ConfirmationControlledPopup from "./ConfirmationControlledPopup";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {ClickEvent, Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import {departments, states} from "../data/data";

interface State {
    name : string
    abbreviation : string
}

function MainForm() {
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    const [birthDate, setBirthDate] = useState<Date | null>(new Date())
    const [state, setState] = useState<State>(states[0])
    const [department, setDepartment] = useState('Sales')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState<string>('0')
    const [validationError, setValidationError] = useState(true)

    function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newEmployee = {
            firstName,
            lastName,
            birthDate,
            startDate,
            street,
            city,
            state : state.abbreviation,
            zipCode,
            department
        }

        for (let value of Object.values(newEmployee)) {
            if (!value) {
                console.log('Creation aborted, missing fields')
                setValidationError(true)
                return null
            }
        }

        setValidationError(false)
        console.dir(newEmployee)
    }

    function clickStateHandler(e : ClickEvent) {
        setState(e.value)
    }

    function clickDepartmentHandler(e : ClickEvent) {
        setDepartment(e.value)
    }

    function changeFirstNameHandler(e : ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value)
    }

    function changeLastNameHandler(e : ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value)
    }

    function changeStreetHandler(e : ChangeEvent<HTMLInputElement>) {
        setStreet(e.target.value)
    }

    function changeCityHandler(e : ChangeEvent<HTMLInputElement>) {
        setCity(e.target.value)
    }

    function changeZipCodeHandler(e : ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.replace(/\D/g, "")
        setZipCode(value)
    }

    return (
        <form id="main-form" onSubmit={submitHandler}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" onChange={changeFirstNameHandler} value={firstName}/>

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" onChange={changeLastNameHandler} value={lastName}/>

            <label htmlFor="birth-date">Date of Birth</label>
            <DatePicker id="birth-date" onChange={((date : Date | null) => setBirthDate(date))} selected={birthDate} />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker id="start-date" selected={startDate} onChange={((date : Date | null) => setStartDate(date))}/>

            <fieldset id="address-field">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" value={street} onChange={changeStreetHandler}/>

                <label htmlFor="city">City</label>
                <input id="city" type="text" value={city} onChange={changeCityHandler}/>

                <label htmlFor="state">State</label>
                <Menu menuButton={<MenuButton id="state">{state? state.name : 'State'}</MenuButton>} transition overflow="auto"
                      onItemClick={clickStateHandler}
                >
                    {states.map(state => (
                        <MenuItem key={`${state.abbreviation} ${state.name}`} value={state}>{state.name}</MenuItem>
                    ))}
                </Menu>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" value={zipCode} onChange={changeZipCodeHandler}/>
            </fieldset>

            <label htmlFor="department">Department</label>
            <Menu menuButton={<MenuButton id="department">{department}</MenuButton>} transition
                  onItemClick={clickDepartmentHandler}
            >
                {departments.map(department => (
                    <MenuItem key={department} value={department}>{department}</MenuItem>
                ))}
            </Menu>

            <ConfirmationControlledPopup validationError={validationError} />
        </form>
    )
}

export default MainForm