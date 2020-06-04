import React from 'react';
import { MdBrokenImage } from 'react-icons/md';
import '../assets/css/style.css';

function ErrorLoading() {
  const somecss = {
    display: 'flex',
    // padding: '10px',
  };
  const anothercss = {
    margin: '10px',
    padding: '20px 30px',
    // background: 'white',
    height: '250px',
    textAlign: 'center',
    borderRadius: '5px',
  };
  const size = {
    fontSize: '16px',
  };

  return (
    <div className="scroll" style={somecss}>
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} style={anothercss} className="buffer">
          <MdBrokenImage size={60} />
          <h3 style={size}>
            Couldn't get <br /> content
          </h3>
        </div>
      ))}
    </div>
  );
}
export default ErrorLoading;
