import { FaUserCircle, FaCaretDown } from "react-icons/fa"
import Wrapper from "./Logoutcss"
import { useState } from "react"
import { useDashboardContext } from "../pages/DashboardLayout"

const Logoutcontainer = () => {
    const [showlogout, setShowLogout] = useState(true);
    const {user, logoutUser}= useDashboardContext();


  return (
    <div>
        <button type="button" className="btn logout-btn"
        onClick={() => setShowLogout(!showlogout)}>
            <FaUserCircle/>
            {user?.name}
            <FaCaretDown/>
        </button>
        <div className={showlogout?'dropdown show-dropdown': 'dropdown'}>
            <button type= 'button' className="dropdown-btn" onClick={logoutUser}>logout </button>
        </div>
    </div>
  )
}
export default Logoutcontainer;