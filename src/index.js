import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudCustomer from './CRUDCustomer/CrudCustomer';
import FirstComponent from './Demo/FirstComponent';
import UserProfile from './UserProfile/UserProfiles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AddressComponent /> */}
    {/* <CrudCustomer /> */}
    {/* <FirstComponent /> */}
    <UserProfile />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
