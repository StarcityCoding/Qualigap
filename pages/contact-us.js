import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import seedlings from '../public/seedlings.jpg'
import { BiUserVoice } from 'react-icons/bi';
import Head from 'next/head'
import { MdOutlineCompost, MdOutlineContactSupport } from "react-icons/md";
import { urlFor, client } from '../pages/api/client';
import { GiChemicalDrop,GiWorld, GiPlantSeed, GiFarmTractor, GiChemicalTank, GiFarmer, GiMasterOfArms, GiSeedling } from "react-icons/gi";




export default function ContactUs(){

  const [contactData, setContactData] = useState({  location: null, phoneNumbers: [], emails: [] });

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "contact"][0] {
            location,
            phoneNumbers,
            emails
          }
        `);
        setContactData(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);



    return(
      <>
            <Head>
        <title>Contact Us | Qualigap.com</title>
      </Head>
       <div className="left-0 top-0 w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Contact Us</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>





    <div className="bg-[#f1cf69] content-center text-center justify-center">
            
  

            <div className="pt-16 justify-center text-center block">

<h1 className="text-black/50 font-[400] text-lg">
                We are a message away
            </h1>
       
            <h1 className="text-[#334b35] font-bold mb-1 px-5 text-[32px] lg:text-[40px] pb-1">
                Send Us a Message
            </h1>
            <button>
            <div className="border-b-black/60 border-b-[5px] w-[65px]">

</div>

</button>
</div>
<div className="lg:mx-auto section-container1 flex-col lg:flex lg:flex-row lg:flex-wrap">
             
 <div className="md:container justify-items-center md:mx-auto mx-4 pb-10 lg:flex md:px-10 lg:flex-row">

    <div className="lg:basis-2/4 lg:text-left lg:text-2xl px-3 lg:px-10 font-Averia text-[#334b35]">
               
            <p className="text-[#334b35] px-2 lg:px-0 pt-8 lg:pt-20 lg:text-left pb-5">
            Do you have any questions, enquiries or concerns? Get in touch with us by writing us a message, and we will give you the assistance, help & support you need.
            </p>


           <div className="hidden lg:contents"> <h1 className="font-medium text-black/80 pb-1">
              Our Location:
            </h1>
<p>
{contactData.location && (
<>
<span>{contactData.location.locale}</span>
</>

)}

</p>
<h1 className="font-medium text-black/80 pt-5 pb-1">
              Phone:
            </h1>
<p className='flex flex-col space-y-1'>
{contactData.phoneNumbers.map((phoneNumber, index) => ( 
<>
<span>{phoneNumber.number}</span>
</>

))}    
</p>
<h1 className="font-medium text-black/80 pt-5 pb-1">
              Email:
            </h1>
            <p className='flex flex-col space-y-1'>
            {contactData.emails.map((email, index) => ( 
<>
<span>{email.address}</span>
</>

))}  
            </p>
            </div>
        


                {/*  */}
           
                 

            </div>


            <div className="lg:basis-2/4 lg:pt-20 lg:mt-0">   
               
            
            
            <ContactForm/>
            
            
            </div>
            <div className="lg:hidden text-left content-start justify-start px-6 border-b-black/20 border-b pb-6"> <h1 className="font-medium text-black/80 pb-1">
              Our Location:
            </h1>
<p> Alhaji Lati Warehouse, 
           Beside Id Praying Ground, Adjacent First Bank, Bida, Niger State.
</p>
<h1 className="font-medium text-black/80 pt-5 pb-1">
              Phone:
            </h1>
<p>+234 815 330 4104<br/>
+234 802 697 0214
</p>
<h1 className="font-medium text-black/80 pt-5 pb-1">
              Email:
            </h1>
            <p>
            info@qualigap.com<br/>
           qualigap@gmail.com
            </p>
            </div>
            </div>
            </div>
            </div>
      


    
    
  </div>


</>
    )
}