import './Pages.css';
import React, { Component } from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Home(){
    const [ tempEnt, setTempEnt ] = useState([])
    useEffect(() => {
        axios.get('https://api.publicapis.org/entries').then(response => {
            console.log(response.data);
            setTempEnt(response.data.entry);
    });
    },[])
    
    return(
        <>
        <div className='Page-header'>
            <h2>MotherlyCareers</h2>
            <h4>is a job finder that can help single mothers land a suitable job for them!</h4>
            <h5>Want to connect to the professional network? Single mothers can find the right job for them, where they can communicate with the professionals and learn the skills needed to succeed in their career.</h5>
            <br/>
            <h5>Don't have an account? Let's get you started!</h5>
            <Button variant="primary" type="register" onClick={event =>  window.location.href='/register'}>
                Create an Account
            </Button>
        </div>
        </>
    );
}
export default Home;