import {useQuery} from "react-query";
import {getList} from "../api/apiQueries";
import {CustomTable} from "vk-custom-tables";
import {columnsLabel} from "../data/data";
import "vk-custom-tables/dist/Styles/CustomTable.css"

function EmployeesList() {
    const {isLoading, isError, data, error} = useQuery('get-list', getList)

    if (isLoading) return <div>Loading data</div>

    if (isError) {
        console.log(error)
        return <div>An error occurred</div>
    }

    return (
        <>
            <h1>Current Employees</h1>
            <CustomTable data={data?.data} columns={columnsLabel} />
        </>
    )
}

export default EmployeesList