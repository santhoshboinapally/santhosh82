import React from "react";
import './contact.css';
//import REACT_APP_API_KEY from "../.env";
import arrow from "../components/images/arrow.png"

function Contact() {
    const [result, setResult] = React.useState("");
    const REACT_APP_API_KEY="d17359a1-ccd9-4a65-9080-afeeb6503e72";
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key",REACT_APP_API_KEY);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mail Sended Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="contact-container">
        <h1 id="Contact" className="hedding" style={{ fontSize :"25px", textShadow:'none'}}>Get in touch</h1>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" required/>
          <input type="email" name="email" placeholder="email" required/>
          <textarea name="message" placeholder="write you message" required></textarea>  
          <button type="submit">Send<img src={arrow} alt = "arrow" /></button>
          </form>
        <span>{result}</span>
        </div>
    );
  }  
  export default Contact;