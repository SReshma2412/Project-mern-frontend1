
import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav class="navbar  bg-dark p-2 " style={{fontSize:"25px"}}>
            <Link  to="/" class="navbar-brand mx-3 text-white"  style={{fontSize:"30px",fontFamily:"Nosifer"}} >Student-Records</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link text-white">Create-Student</Link>
                <Link to="/student-list" class="nav-link text-white">Student-List</Link>
            </div>
        </nav>
    )
}
export default Nav;