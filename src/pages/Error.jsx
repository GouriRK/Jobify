import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import Logoutcontainer from "../components/Logoutcontainer";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404){
    return (
    <Wrapper>
      <div>
        <img src={img} alt="not found"/>
        <h3>
          Ohh! page not found
        </h3>
        
      <p> we can't seem to find the page you are looking for</p>
      <Link to='/dashboard'>Back home</Link>
      </div>
      
    </Wrapper>
    )
  }
  
};
export default Error;
