import React, { Component } from 'react';
import BasicExample from '../Components/Forms';
import Button from 'react-bootstrap/Button';

function Registerpage(){
    return(
        <>
        <div className = "Page-header">
            <BasicExample />
            <Button variant="primary" type="submit" onClick={event =>  window.location.href='/login'}>
            Submit
            </Button>
        </div>
        </>
    );
}
export default Registerpage;