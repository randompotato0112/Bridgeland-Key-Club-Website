const ContactUs = () => {
    return (
        <div style={styles.container}>
            <div style={styles.contactContainer}>
                <h1>Contact Us</h1>
                <ul style={styles.socialMedia}>
                    <li style={styles.socialMediaItem}>
                        <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
                    </li>
                    <li style={styles.socialMediaItem}>
                        <a href="https://www.remind.com/join/your_remind" target="_blank" rel="noopener noreferrer" style={styles.link}>Remind</a>
                    </li>
                    <li style={styles.socialMediaItem}>
                        <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
                    </li>
                    <li style={styles.socialMediaItem}>
                        <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    contactContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    socialMedia: {
        listStyle: 'none',
        padding: 0,
    },
    socialMediaItem: {
        margin: '10px 0',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        fontWeight: 'bold',
    },
};

export default ContactUs;</li>