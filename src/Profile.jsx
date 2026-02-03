import { Outlet } from "react-router"

const Profiles = ()=> {
    return (
        <div>
        <h1>Hello from profile page</h1>
        <p>So, how are you?</p>
        <Outlet/>
        </div>
    )
}

export default Profiles