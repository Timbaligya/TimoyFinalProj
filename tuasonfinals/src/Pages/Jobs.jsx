import './Pages.css';
import React, { Component } from 'react';

function Job(){
    
    return(
        <>
        {/* Sample Job Posts */}
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
                <p>Message Here</p>
            </div>
            <div className='feed-input-option'>
                <div className='input-option'>
                <h4>Like</h4>
                </div>
                <div className='input-option' onClick={event =>  window.location.href='/comment'}>
                <h4>Comment</h4>
                </div>
                <div className='input-option'>
                <h4>Share</h4>
                </div>
                <div className='input-option'>
                <h4>Send</h4>
                </div>
            </div>
            
        </div>
        <div className='posts'>
            <div className='post-header'>
                <div className='post-info'>
                    <h2>Timothy Tuason</h2>
                    <p>Job Description</p>
                </div>
            </div>
            <div className='post-body'>
                <p>Message Here</p>
            </div>
            <div className='feed-input-option'>
                <div className='input-option'>
                <h4>Like</h4>
                </div>
                <div className='input-option' onClick={event =>  window.location.href='/comment'}>
                <h4>Comment</h4>
                </div>
                <div className='input-option'>
                <h4>Share</h4>
                </div>
                <div className='input-option'>
                <h4>Send</h4>
                </div>
            </div>
            
        </div>
        <div className='posts'>
            <div className='post-header'>
                <div className='post-info'>
                    <h2>Timothy Tuason</h2>
                    <p>Job Description</p>
                </div>
            </div>
            <div className='post-body'>
                <p>Message Here</p>
            </div>
            <div className='feed-input-option'>
                <div className='input-option'>
                <h4>Like</h4>
                </div>
                <div className='input-option' onClick={event =>  window.location.href='/comment'}>
                <h4>Comment</h4>
                </div>
                <div className='input-option'>
                <h4>Share</h4>
                </div>
                <div className='input-option'>
                <h4>Send</h4>
                </div>
            </div>
        </div>
        <div className='posts'>
            <div className='post-header'>
                <div className='post-info'>
                    <h2>Timothy Tuason</h2>
                    <p>Job Description</p>
                </div>
            </div>
            <div className='post-body'>
                <p>Message Here</p>
            </div>
            <div className='feed-input-option'>
                <div className='input-option'>
                <h4>Like</h4>
                </div>
                <div className='input-option' onClick={event =>  window.location.href='/comment'}>
                <h4>Comment</h4>
                </div>
                <div className='input-option'>
                <h4>Share</h4>
                </div>
                <div className='input-option'>
                <h4>Send</h4>
                </div>
            </div> 
        </div>
        </div>
        </>
    );
}
export default Job;