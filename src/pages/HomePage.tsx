import MainForm from "../components/MainForm";
import {Link} from "react-router-dom";


function HomePage() {
    return (
        <>
            <h1>HRNet</h1>
            <div className="form-container">
                <Link to="/employees">View Current Employees</Link>
            </div>
            <MainForm />
        </>
    )
}

export default HomePage