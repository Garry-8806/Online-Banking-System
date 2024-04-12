import React from 'react';

const ServerDownPage = () => {
  return (
    <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/Background_2560x1440.jpg)`, backgroundSize: 'cover' }}>
      <h3 style={{ textAlign: 'center', fontSize: '5vh' }}>Server Down</h3>
      <div className="server_down" style={{ width: '100%', margin: '5% auto', textAlign: 'center' }}>
        <img src={`${process.env.PUBLIC_URL}/images/maintenance/server_down2.gif`} alt="Server Down" style={{ borderRadius: '30px', height: '330px', width: '440px' }} />
      </div>
    </div>
  );
}

export default ServerDownPage;
