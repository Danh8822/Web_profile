import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import email from '../../Assets/email.png';
import github from '../../Assets/github.png';
import ContactForm from "./ContactForm/ContactForm";



const ContactMe = () => {
    return ( 
        <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard
                    iconUrl={email}
                    text="danh8822@gmail.com"
                    />
                    <ContactInfoCard
                    iconUrl={github}
                    text="https://github.com/Danh8822"
                    />
                </div>
                <div style={{flex: 1}}>
                    <ContactForm/>
                </div>
            </div>

        </section>
     );
}
 
export default ContactMe;