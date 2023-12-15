import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {
  Homelayout, 
  Landing, 
  Register, 
  Login, 
  DashboardLayout, 
  Error, 
  Addjob, 
  Stats, 
  Alljobs, 
  Profile, 
  Admin
} from './pages';


const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('dark-Theme') === 'true'
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
 }

 const isDarkThemeEnabled = checkDefaultTheme(); 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homelayout/>,
    errorElement: <Error/>,
    children: [
      {
        index:true,
        element: <Landing/>
      },
        {
    path: 'register',
    element: <Register/>
  },

{
    path: 'login',
    element: <Login/>
  },
  {
    path: 'dashboard',
    element: <DashboardLayout isDarkThemeEnabled = {isDarkThemeEnabled}/>,
    children:[
      {
        index: true,
        element: <Addjob/>
      },
      {
        path: 'stats',
        element: <Stats/>
      },
      {
        path: 'all-jobs',
        element: <Alljobs/>
      },
      {
        path: 'profile',
        element: <Profile/>
      },
      {
        path: 'admin',
        element: <Admin/>
      },
    ]
  },
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App