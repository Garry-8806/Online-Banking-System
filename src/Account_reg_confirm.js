import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CustomerRegistrationConfirmation() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        // Define your form fields here
    });

    const handleConfirmSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/submit-confirmation', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Assuming the response contains a field indicating success
            if (response.data.success) {
                // Handle successful confirmation
                console.log('Confirmation submitted successfully:', response.data);
                // Redirect to the registration confirmation page
                history.push('/registration-confirmation');
            } else {
                console.error('Confirmation failed:', response.data);
                // Handle confirmation failure
            }
        } catch (error) {
            console.error('Error submitting confirmation:', error);
            // Handle error
        }
    };

    // JSX for rendering the form

    return (
        <div>
            <h2>Registration Confirmation</h2>
            {/* Your form JSX */}
            <button type="submit" onClick={handleConfirmSubmit}>Confirm Registration</button>
        </div>
    );
}

export default CustomerRegistrationConfirmation;
