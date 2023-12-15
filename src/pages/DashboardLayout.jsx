import {Outlet} from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, SmallSidebar} from '../components';
import { Navbar } from '../components';
import { createContext, useContext, useState } from 'react';

 const DashboardContext = createContext();

 
const DashboardLayout = ({isDarkThemeEnabled}) => {
  // temp 
  const user = {name: 'john'}
   const[showSidebar, setShowsidebar]=useState(false);
   const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

   const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
  setIsDarkTheme(newDarkTheme);
  console.log('darktheme', newDarkTheme);
  document.body.classList.toggle('dark-theme', newDarkTheme);
  localStorage.setItem('darktheme', newDarkTheme);
  }

   const toggleSidebar = () =>{
    setShowsidebar(!showSidebar);
   };

   const logoutUser = async () => {
    console.log('logout user');
   }

   return(
    <DashboardContext.Provider value={{
      user, 
      showSidebar,
      isDarkTheme,
      toggleDarkTheme,
      toggleSidebar,
      logoutUser
    }}>
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar/>
        <div>
          <h2>Dashboard</h2>
          <Navbar/>
          <div className='dashboard-page'>
            <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>)
    

};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;