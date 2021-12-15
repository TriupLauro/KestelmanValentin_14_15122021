import MainForm from "../components/MainForm";


function HomePage() {
    return (
        <>
            <h1>HRNet</h1>
            <div className="form-container">
                <a href="#">View Current Employees</a>
            </div>
            <MainForm />
        </>
    )
}

export default HomePage