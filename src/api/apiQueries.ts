import axios from "axios";

const BASE_URL = 'http://localhost:60'

interface Employee {
    firstName : string
    lastName : string
    dateOfBirth : string
    startDate : string
    street : string
    city : string
    state : string
    zipCode : string
    department :string
    id : number
}

export async function getList() {
    return await axios.get(`${BASE_URL}/employees`)
}

export async function postNewEmployee(employee : Employee) {
    return await axios.post(`${BASE_URL}/employees`, employee)
}