import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GoArrowRight } from "react-icons/go";
import { MdGppGood } from "react-icons/md";


const ContactForm = () => {

  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z661dg8', 'template_raskqzj', form.current, 'nzzGHiAhTnhBTfi_n')
    .then(({ status }) => {
      if (status === 200) {
        setFormSubmitted({ title: 'Your Message Has Been Sent Successfully!', paragraph: 'Our Support Team Will Get Back To You ASAP!' });
      } else {
        setFormSubmitted({ title: 'Unexpected Status Code Returned, Try Again Later', paragraph: 'Please Contact Us Directly Through Our Phone Number or Through Our Email.' });
      }
    }, (err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      setFormSubmitted({ title: 'Error Sending Message, Please Try Again Later', paragraph: 'Please Contact Us Directly Through Our Phone Number or Through Our Email.' });
    });
  };

  return formSubmitted.title === '' ? (
    
    <div className="contact-sections">
        <div className="bsg-[#87754086] text-white lg:ml-5 p-10 lg:bg-[#87754040] px-4 lg:p-10 lg:rounded-[10px] lg:shadow-sm">
      
    <form ref={form} onSubmit={sendEmail}>
        <div className="font-open-sans">
        <div className="">
              <input
                name="user_name"
                placeholder="Name: *"
                className="rounded-[8px] p-6 mb-4 w-full bg-[#87754086] placeholder-white/60 text-white/75 focus:outline-none"
                type="text"
                required
              />
            </div>
              <input
                name="to_name"
                value="Qualigap CEO"
                className=""
                type="hidden"
                required
              />
            
            <div className="">
              <input
                name="subject"
                placeholder="Subject: *"
                className="rounded-[8px] p-6 mb-4 w-full bg-[#87754086] placeholder-white/60 text-white/75 focus:outline-none"
                type="text"
                required
              />
              </div>
              <div className="">
              <input
                name="user_email"
                placeholder="Email: *"
                className="rounded-[8px] p-6 mb-4 w-full bg-[#87754086] placeholder-white/60 text-white/75 focus:outline-none"
                type="email"
                required
              />
            </div>
          </div>
          <div className="text-black">
              <textarea
                rows="6"
                placeholder="Your Message: *"
                name="message"
                className="rounded-[8px] p-6 mb-4 w-full bg-[#87754086] placeholder-white/60 text-white/75 focus:outline-none"
                type="text"
                required
              />
        </div>
        <div className="-mt-2 conntent-right text-right justify-content">
          <button className="rounded-xl py-5 pl-5 pr-10 mt-3 lg:mt-0 bg-green-900 hover:bg-black/60 text-gray-300 font-semibold" type="submit">Send Message  <span
            style={{ color: 'white', size:'45px' }}
            className=''
          >
             <span className="absolute mt-1 pl-[5px]">
            <GoArrowRight />
            </span>
            
                </span> </button>
          
      
    </div>
    </form>
    </div>
    </div>
  ) : (
    
    <div className="lg:ml-5 bg-[#87754040] pt-6 pb-10 px-4 lg:px-6 rounded-[15px] shadow-md">
    <div className="justify-center text-center content-center text-black font-Averia">
        
        
       <button className="justify-center text-center content-center"> 
    <div
            style={{ size:'45px', color:'green' }}
            className='text-center lefttoright w-[85px]'
          >
             <div className="bg-green-200 opacity-75 p-2 rounded-full text-center content-center">
            <MdGppGood size={70} />
            </div>
            
                </div>
                </button>
                
                
      <h3 className="text-2xl font-semibold text-green-700 py-5 px-3">{formSubmitted.title}</h3>
      <p className="px-4">{formSubmitted.paragraph}</p>
      <p className="px-3 py-5">You can also contact us through our email or phone number below:</p>
      <p className="px-3">Email: info@qualigap.com<br/>
           qualigap@gmail.com</p><br/>
      <p className="px-3">Phone: +234 815 330 4104<br/>
+234 802 697 0214</p>
      
      
    </div>
    </div>
  );
    
};

export default ContactForm