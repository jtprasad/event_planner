import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer.jsx'; // Imports footer
const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            {/* Page Header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/* Section for describing the purpose of the app */}
            <section className="description">
                {/* Brief intro/Marketing message */}
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                {/* Primary call to action button */}
                <button className="get-started-button">Get Started</button>
            </section>
            {/* Section to list different types of events */}
            <section className="events_categories">
                {/* Social events */}
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthdays</li>
                    <li>Anniversaries</li>
                    <li>Wedding Receptions</li>
                    <li>Baby Showers</li>
                    <li>Graduation Parties</li>
                    <li>Family Reunions</li>
                </ul>
                {/* Entertainment-based events */}
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music Festivals</li>
                    <li>Film Screenings</li>
                    <li>Comedy Shows</li>
                    <li>Art Exhibitions</li>
                    <li>Cultural Events</li>
                </ul>
                {/* Community-based events */}
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundaraisers</li>
                    <li>Charity Galas</li>
                    <li>Volunteer Drives</li>
                    <li>Neighborhood Block Parties</li>
                    <li>Community Festivals</li>
                    <li>Cultural Celebrations</li>
                </ul>
            </section>
            {/* Section to highlight features */}
            <section className="features">
                {/* Section Heading */}
                <h2>Features</h2>
                {/* List of key platform features */}
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            {/* Section to showcase user reviews */}
            <section className="testimonials">
                {/* Section Heading */}
                <h2>Testimonials</h2>
                {/* Individual testimonial blocks */}
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze! I highly recommend!</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>
            {/* Section to provide contact information */}
            <section className="contact">
                {/* Section Heading */}
                <h2>Contact Us</h2>
                {/* Contact form */}
                <form>
                    {/* Name input field */}
                    <input type="text" placeholder="Name"/>
                    {/* Email input field */}
                    <input type="text" placeholder="Email"/>
                    {/* Message text area */}
                    <textarea placeholder="Message"/>
                    {/* Submit button */}
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default EventPlanner;
