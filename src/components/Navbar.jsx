import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logoutcontainer from "./Logoutcontainer";
import Themetoggle from "./Themetoggle";
const Navbar = () =>{
  const {toggleSidebar} = useDashboardContext();
  return(
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn"
         onClick={toggleSidebar}>
          <FaAlignLeft/>
        </button>
      <div>
      <Logo/>
      <h4 className="logo-text">dashboard</h4>
      </div>
      <div className="btn-container">
      <Themetoggle/>
      </div>
      <div className="btn-container">
      <Logoutcontainer/>
        </div>
        </div>
    </Wrapper>
  )
}
export default Navbar;