import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Make sure to create and import a CSS file for styling

// /C:/Users/Hemish Duri/Desktop/Key Club/mainPage.js

document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to Bridgeland Key Club!';

    const description = document.createElement('p');
    description.textContent = 'We are a volunteering club with over 600 members dedicated to making a difference in our community.';

    const joinButton = document.createElement('button');
    joinButton.textContent = 'Join Us';
    joinButton.addEventListener('click', function() {
        alert('Thank you for your interest in joining Bridgeland Key Club!');
    });

    app.appendChild(title);
    app.appendChild(description);
    app.appendChild(joinButton);
});
function App() {
    const handleJoinClick = () => {
        alert('Thank you for your interest in joining Bridgeland Key Club!');
    };

    return (
        <div id="app">
            <h1>Welcome to Bridgeland Key Club!</h1>
            <p>We are a volunteering club with over 600 members dedicated to making a difference in our community.</p>
            <button onClick={handleJoinClick}>Join Us</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
function App() {
    const handleJoinClick = () => {
        alert('Thank you for your interest in joining Bridgeland Key Club!');
    };

    return (
        <div id="app">
            <div className="banner">
                <img src="default-banner.jpg" alt="Bridgeland Key Club Banner" className="banner-image" />
            </div>
            <div className="content">
                <h1>Welcome to Bridgeland Key Club!</h1>
                <p>We are a volunteering club with over 600 members dedicated to making a difference in our community.</p>
                <button onClick={handleJoinClick}>Join Us</button>
            </div>
            <div className="sidebar">
                <button>About Us</button>
                <button>Events</button>
                <button>Contact</button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));