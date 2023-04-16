import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {loader as idLoader} from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Page404 = () => <div>404</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page404 />,
  },
  {
    path: "/:id",
    element: <App />,
    loader: idLoader
  },
  {
    path: "/charger/:id",
    element: <Page404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // <Router history={browserHistory}>
  //   <App />
  // </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
