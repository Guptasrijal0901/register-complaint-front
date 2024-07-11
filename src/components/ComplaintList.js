// src/components/ComplaintList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComplaintList = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            const response = await axios.get('http://localhost:5000/api/complaints');
            setComplaints(response.data);
        };
        fetchComplaints();
    }, []);

    return (
        <div>
            <h2>Complaints</h2>
            <ul>
                {complaints.map((complaint) => (
                    <li key={complaint._id} className="complaint-item">
                        {complaint.name}: {complaint.incidentDetails} <span className="status">(Status: {complaint.status})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComplaintList;
