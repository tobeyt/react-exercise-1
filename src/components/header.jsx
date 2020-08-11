import React from 'react';
import avatar from '../assets/avatar.jpg';

const Header = () => {
  return (
    <div style={{ position: 'relative', top: -75 }}>
      <img src={avatar} alt="avatar" className="image-size" />
      <h1 align="center" style={{ margin: 20 }}>
        HELLO,
      </h1>
      <h1 align="center" style={{ marginBottom: 20 }}>
        MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV
      </h1>
      <hr style={{ color: '#ededed' }} />
    </div>
  );
};

export default Header;
