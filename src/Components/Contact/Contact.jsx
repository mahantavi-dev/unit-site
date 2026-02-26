import React, { useState } from 'react'
import './Contact.css'
import { useForm } from "react-hook-form"
import useWeb3Forms from "@web3forms/react"

import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const { register, reset, handleSubmit } = useForm();
  const [result, setResult] = useState(null);

  const accessKey = "9f3b2b0b-5b7c-4fca-a586-249a37882e9c";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Educity Website",
      subject: "New Contact Message from Educity",
    },
    onSuccess: (msg) => {
      setResult("✅ Message sent successfully!");
      reset();
    },
    onError: (msg) => {
      setResult("❌ Something went wrong. Please try again.");
    },
  });

  return (
    <div className='contact'>

      {/* LEFT SIDE */}
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="" />
        </h3>

        <p>
          We would love to hear from you! Whether you have questions about our programs,
          admissions process, campus facilities, or anything else, our team is ready to assist you.
          Feel free to reach out through the contact form or use the information provided below.
          Your feedback, suggestions, and inquiries are important to us as we continue to improve
          and provide the best possible experience for our university community.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="" />
            contact@educity.com
          </li>

          <li>
            <img src={phone_icon} alt="" />
            +1 123-456-7890
          </li>

          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="contact-col">

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            {...register("phone", { required: true })}
          />

          <label>Your Message</label>
          <textarea
            rows="6"
            placeholder="Enter your message"
            {...register("message", { required: true })}
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={white_arrow} alt="" />
          </button>

        </form>

        {result && <span className="form-result">{result}</span>}

      </div>

    </div>
  )
}

export default Contact