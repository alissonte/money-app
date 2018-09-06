import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
    <div>
        <h1>404.. This page is not found!</h1>
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);
export default NotFound;