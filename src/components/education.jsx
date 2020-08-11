import React from 'react';

const Education = (props) => {
  const { year, title, ctx } = props;
  return (
    <div style={{ marginBottom: 10, display: 'flex' }}>
      <p style={{ flex: 0.1 }}>
        <b>{year}</b>
      </p>
      <div style={{ backgroundColor: '#ededed', margin: '0 0 10px 0', flex: 0.9 }}>
        <p style={{ padding: '10px 10px' }}>
          <b>{title}</b>
        </p>
        <p style={{ padding: '0 10px 10px 10px' }}>{ctx}</p>
      </div>
    </div>
  );
};

export default Education;
