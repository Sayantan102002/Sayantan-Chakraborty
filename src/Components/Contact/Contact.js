import React, { useState } from 'react'
import './Contact.css'
import './Contact2.css'
export default function Contact() {
    const [user, setUser] = useState({
        name: '', email: '', message: ''
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        try {
            e.preventDefault();
            const { name, email, message } = user;
            const res = await fetch("https://sayantan-chakraborty-default-rtdb.asia-southeast1.firebasedatabase.app/contactdata.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, email, message,
                }),
            }
            );
            if (!res) {
                window.alert("Unsuccessfull")
            }
            else {
                window.alert("Thank You for contacting. You will get a reply ASAP.")
                // window.location.reload();
            }

        } catch (error) {
            window.alert("Some Error Occurred");

        }

    }
    // const sendemail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('gmail', 'template_demo', e.target, 'user_ewHvkvKYUlUCWS1KMpchI')
    //         .then((result) => {
    //             console.log(result);
    //         }, (error) => {
    //             console.log(error);
    //         });
    //     e.target.reset();
    // }
    return (
        <>
            <div className="container_Contact">
                <div className="title">
                    <h1 className="heading">Get in touch!</h1>
                    <p className="subtitle">Contact me for any query</p>
                </div>
                <div className="form_Container">
                    <div className="contacts">
                        <div className="address">
                            <p>Address:-<br />5, Sree Durga Colony(9th lane)</p>
                        </div>
                        <div className="email">
                            <p>Email:-<br />sayantanchakrabortybms@gmail.com</p>
                        </div>
                    </div>
                    <form className="contact_form" method="POST" >
                        <p className="para">Contact Form</p>
                        <div className="name">
                            <p className="p">Your Name</p>
                            <input type="text" name="name" placeholder="Name" onChange={handleInputs} value={user.name} required />
                        </div>
                        <div className="email2">
                            <p className="p">Email</p>
                            <div className="email_type">
                                <input type="email" name="email" placeholder="Email" onChange={handleInputs} value={user.email} required />
                            </div>
                        </div>
                        <div className="textarea">
                            <p className="p">Your Message</p>
                            <textarea name="message" id="" placeholder="Message" onChange={handleInputs} value={user.message} required></textarea>
                        </div>
                        <div className="button">
                            <button className="btn" type="submit" onClick={postData}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
