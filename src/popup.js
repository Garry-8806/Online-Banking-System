import React from 'react';
import './css/Popup.css'; // Import CSS for the Popup styling

function popup({ children, onClose }) {
    return (
        <div className="popup-container">
            <div className="popup">
                <button className="close-btn" onClick={onClose}>X</button>
                {children}
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}

export default popup;
