import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,  RouterProvider,} from "react-router-dom";

// import Home from './yaassine/Home';
// import Blog from './yaassine/Blog';
// import About from './yaassine/About';





// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/blog",
//     element: <Blog />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <RouterProvider router={router} /> */}
    <App />

  </React.StrictMode>
  

);















