import React  from 'react';
import './Styles/Card.css';
import {MdBrokenImage} from 'react-icons/md';

function ErrorLoading (){
    const somecss = {
        display: 'flex',
        // padding: '10px',
    }
    const anothercss = {
        margin: '10px',
        padding: '20px 30px',
        // background: 'white',
        height: '250px',
        textAlign: 'center',
        borderRadius: '5px'
    }
    const size = {
        fontSize: '16px'
    }
   
       return(
        <div style={somecss}>
            <div style={anothercss} className="buffer">
                <MdBrokenImage size={60}/>
                <h3 style={size}>Couldn't get <br/> content</h3>
            </div>
            <div style={anothercss} className="buffer">
                <MdBrokenImage size={70}/>
                <h3 style={size}>Couldn't get <br/> content</h3>
            </div>
            <div style={anothercss} className="buffer">
                <MdBrokenImage size={70}/>
                <h3 style={size}>Couldn't get <br/> content</h3>
            </div>
            <div style={anothercss} className="buffer">
                <MdBrokenImage size={70}/>
                <h3 style={size}>Couldn't get <br/> content</h3>
            </div>
            <div style={anothercss} className="buffer">
                <MdBrokenImage size={70}/>
                <h3 style={size}>Couldn't get <br/> content</h3>
            </div>
        </div>
       ); 
   
}
export default ErrorLoading;