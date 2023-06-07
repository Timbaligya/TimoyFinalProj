import './Pages.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function CommentSection(){
    const [ comment, setcomment ] = useState('');
    return(
        <>
        {/* Sample Comment Section */}
        <div className='Page-header'>
            <h1>Job Listing</h1>
            <div className='posts'>
            <div className='post-header'>
                <div className='post-info'>
                    <h2>Timothy Tuason</h2>
                    <p>Job Description</p>
                </div>
            </div>
            <div className='post-body'>
                <p>Message Here:</p>
                <h6>{comment}</h6>
            </div>
            <br />
            <div className='feed-input-option'>
                <div className='feed-input'>
                    <Form>
                    <Form.Control type="Comment" placeholder="Comment here" onChange={(e) => {setcomment(e.target.value)}} />
                        <Button variant="primary" type="sendcomment">
                        Send comment
                        </Button>
                    </Form>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default CommentSection;