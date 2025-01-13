// eventsPage.js

document.addEventListener('DOMContentLoaded', function() {
    const events = [
        {
            title: 'Key Club Meeting',
            date: '2023-11-15',
            location: 'Santa Monica Beach',
            description: 'Join us for a beach cleanup event to help keep our beaches clean and beautiful.',
            image: 'beach_cleanup.jpg'
        },
        {
            title: 'Food Drive',
            date: '2023-12-01',
            location: 'Downtown Community Center',
            description: 'Help us collect and distribute food to those in need in our community.',
            image: 'food_drive.jpg'
        },
        {
            title: 'Tree Planting',
            date: '2023-12-10',
            location: 'City Park',
            description: 'Come and help us plant trees to make our city greener and more beautiful.',
            image: 'tree_planting.jpg'
        }
    ];

    const container = document.createElement('div');
    container.className = 'events-container';

    const banner = document.createElement('div');
    banner.className = 'banner';
    banner.innerHTML = '<h1>Upcoming Volunteering Events</h1>';
    container.appendChild(banner);

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        const eventImage = document.createElement('img');
        eventImage.src = event.image;
        eventImage.alt = event.title;
        eventCard.appendChild(eventImage);

        const eventDetails = document.createElement('div');
        eventDetails.className = 'event-details';

        const eventTitle = document.createElement('h2');
        eventTitle.textContent = event.title;
        eventDetails.appendChild(eventTitle);

        const eventDate = document.createElement('p');
        eventDate.textContent = `Date: ${event.date}`;
        eventDetails.appendChild(eventDate);

        const eventLocation = document.createElement('p');
        eventLocation.textContent = `Location: ${event.location}`;
        eventDetails.appendChild(eventLocation);

        const eventDescription = document.createElement('p');
        eventDescription.textContent = event.description;
        eventDetails.appendChild(eventDescription);

        eventCard.appendChild(eventDetails);
        container.appendChild(eventCard);
    });

    document.body.appendChild(container);

    const alertBanner = document.createElement('div');
    alertBanner.className = 'alert-banner';
    alertBanner.innerHTML = '<p>Don\'t miss out on our upcoming events! Sign up now!</p>';
    document.body.appendChild(alertBanner);

    const styles = `
        .events-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .banner {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            width: 100%;
        }
        .event-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin: 20px;
            padding: 20px;
            width: 80%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .event-card img {
            max-width: 100%;
            border-radius: 5px;
        }
        .event-details {
            text-align: center;
        }
        .event-details h2 {
            margin: 10px 0;
        }
        .alert-banner {
            background-color: #ff9800;
            color: white;
            padding: 10px;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    console.log("pages are loaded");
    
});