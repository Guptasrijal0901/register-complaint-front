// src/components/ComplaintStatus.js
import React, { useState } from 'react';
import axios from 'axios';

const ComplaintStatus = () => {
    const [complaintId, setComplaintId] = useState('');
    const [complaint, setComplaint] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://localhost:5000/api/complaints/${complaintId}`);
        setComplaint(response.data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Complaint ID"
                    value={complaintId}
                    onChange={(e) => setComplaintId(e.target.value)}
                    required
                />
                <button type="submit">Check Status</button>
            </form>
            {complaint && (
                <div>
                    <h3>Complaint Details</h3>
                    <p>Name: {complaint.name}</p>
                    <p>Incident Details: {complaint.incidentDetails}</p>
                    <p>Status: {complaint.status}</p>
                </div>
            )}
        </div>
    );
};

export default ComplaintStatus;
