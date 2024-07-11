// src/App.js
import React from 'react';
import './App.css';
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';
import ComplaintStatus from './components/ComplaintStatus';

const App = () => {
    return (
        <div className="container">
            <h1>Complaint Registration System</h1>
            <ComplaintForm />
            <ComplaintStatus />
            <ComplaintList />
        </div>
    );
};

export default App;
