import styles from "./ContactForm.module.css"
import Buttons from "../buttons/Buttons"
import {MdMessage} from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {
  const [name,setName] = useState("Ritesh");
  const [email,setEmail] = useState("Riteshbarman50@gmail.com");
  const [text,setText] = useState("form text");
  const onSubmit = (event) =>{
    event.preventDefault();
    
    setName(event.target[0].value); 
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
   <section className={styles.container}>
    <div className={styles.contact_form}>
    <div className={styles.top_btn}>
          <Buttons text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="20px" />} />
          <Buttons text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Buttons isOutline={true}  text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />}  />
       <form onSubmit={onSubmit}>
       <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{display:"flex",justifyContent:"end"}}>
            <Buttons text="SUBMIT BUTTON" target="blank"/>
          </div>
          <div>
            <div>Name :{name}</div>
            <div>Email :{email}</div>
            <div>Text :{text}</div>
          </div>
       </form>
    </div>
    <div className={styles.contact_Image}>
    <img src="/images/contact.svg" alt="contact image" />
    </div>
   </section>
  )
}

export default ContactForm