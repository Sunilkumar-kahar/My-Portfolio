import style from "./Contact.module.css";
import { useState } from "react";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
    const [usr_name, setUsrName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [msg, setMsg] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gtije7l', 'template_cev8mbc', form.current, {
        publicKey: 'F3_JeSOby3siNB-Dw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setUsrName("");
          setEmailId("");
          setMsg("");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("There was an error sending the message. Please try again.");
        },
      );
    };

    const updateName = (e)=>{
        const txt = e.target.value;
        if((/^[a-zA-Z ]*$/).test(txt))
            setUsrName(txt);
    }

    const updateEmail = (e)=>{
        const TmpEmail = e.target.value;
        setEmailId(TmpEmail);
    }

    const updateMsg = (e)=>{
        const tmpMsg = e.target.value;
        setMsg(tmpMsg);
    }

    return(
        <section id="contact" className={style.contact_section}>
            <h1 className={style.contact_title}>CONTACT ME</h1>
            <div className={style.contact_container}>
                <p className={style.contact_para}>
                    I'm always open to new opportunities, collaborations, or simply connecting with fellow developers. Feel free to reach out through this form or connect with me on my social profiles below.
                </p>
                <form ref={form} onSubmit={sendEmail} className={style.contact_form}>
                    <input type="text" className={style.fieldName} id="name" name="name" placeholder="Your Name" onChange={updateName} value={usr_name} required></input>

                    <input type="email" id="email" name="email" placeholder="Your Email" onChange={updateEmail} value={emailId} required></input>

                    <textarea id="msg" name="msg" rows="5" placeholder="Message" onChange={updateMsg} value={msg} required></textarea>
                    
                    <input className={style.form_submitBtn} type="submit" value="SUBMIT"></input>
                </form>
            </div>
        </section>
    );
}

export default Contact;