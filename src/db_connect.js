import React, { useState, useEffect } from 'react';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch('/check-connection'); // Assuming you have an API endpoint for checking database connection
        if (response.ok) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
          // Handle redirection or error display
        }
      } catch (error) {
        setIsConnected(false);
        // Handle error
      }
    };

    checkConnection();
  }, []);

  return (
    <div>
      {isConnected ? (
        <p>Connection Established</p>
      ) : (
        <p>Server Down</p> // You can customize this message or handle redirection as per your requirement
      )}
    </div>
  );
}

export default App;
