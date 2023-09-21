
import ReactDOM from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from "./views/home/Home"
import About from "./views/about/About"
import Contact from "./views/contact/Contact"

const router=createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: 'Contact',
    element:<Contact/>
  }
])
const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
<RouterProvider router={router}/>
  </>
)