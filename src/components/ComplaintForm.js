// src/components/ComplaintForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ComplaintForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        postalAddress: '',
        incidentDetails: ''
    });

    const [complaintId, setComplaintId] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/complaints', formData);
        setComplaintId(response.data.id);
        alert('Complaint registered successfully! Your Complaint ID is ' + response.data.id);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input name="age" placeholder="Age" type="number" value={formData.age} onChange={handleChange} required />
                <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                <input name="postalAddress" placeholder="Postal Address" value={formData.postalAddress} onChange={handleChange} required />
                <textarea name="incidentDetails" placeholder="Incident Details" value={formData.incidentDetails} onChange={handleChange} required />
                <button type="submit">Register Complaint</button>
            </form>
            {complaintId && <p className="status">Your Complaint ID: {complaintId}</p>}
        </div>
    );
};

export default ComplaintForm;
