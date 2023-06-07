import React, { Component } from 'react';
import BasicExample from '../Components/Forms';
import Button from 'react-bootstrap/Button';

function Loginpage(){
    return(
        <>
        <div className = "Page-header">
            <BasicExample />
            <Button variant="primary" type="login" onClick={event =>  window.location.href='/jobs'}>
            Login
            </Button>
        </div>
        </>
    );
}
export default Loginpage;