import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/*info*/}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Hipster Ipsum · Menu. Home. Dummy text? More like dummy thicc text,
            amirite? Paragraphs: Type: Hipster, neat. Hipster with a shot of
            Latin.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          
          <Link to="/login" className="btn login-link">
            Login/Demo user
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
