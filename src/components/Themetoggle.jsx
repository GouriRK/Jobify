import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from './Theme';

const Themetoggle = () => {
    const {isDarkTheme, toggleDarkTheme} =useDashboardContext();
      return (
        <Wrapper onClick={toggleDarkTheme}>
            {isDarkTheme ? 
            (
            <BsFillSunFill className='toggle-icon'/>) :  
            (<BsFillMoonFill />)}
        </Wrapper>  );
};
export default Themetoggle;