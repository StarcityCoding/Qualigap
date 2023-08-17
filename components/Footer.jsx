import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../pages/api/client';
import { GiSeedling } from "react-icons/gi";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
import Link from 'next/link';



const Footer = () => {

  const [socials, setSocials] = useState([]);
  

  const [contactData, setContactData] = useState({  location: null, phoneNumbers: [], emails: [] });

  useEffect(() => {
  const socialsquery = '*[_type == "socials"]';

    client.fetch(socialsquery).then((data) => {
      setSocials(data);
    });

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



  return (
    <footer className=''>
    <div className="bg-[#f1cf69] content-center text-center justify-center lg:flex lg:flex-row">
            
  

    <div className="pt-16 justify-center text-center block">

    <button><div
            style={{ size:'45px', color:'#f1cf69' }}
            className='rotator-ef rounded-full text-center justify-center'
          >
             <div className="bg-[#263c28] shadow-md border-gray-400 p-4 rounded-full content-center justify-center">
            <GiSeedling size={70} />
            </div>
            
                </div>
                </button>



    <h1 className="text-[#334b35] font-bold mb-1 px-5 text-[32px] lg:text-[40px] pb-1 font-Averia">
        We are Leaders in the Agricultural Market
    </h1>
    <button>
    <div className="border-b-black/60 border-b-[5px] w-[65px]">

</div>

</button>

<p className="text-[#263c28] font-[300] font-Averia tracking-[0.015rem] text-[1.5rem] md:text-[2rem] pt-16 lg:px-[100px] pb-20 px-8 md:px-14 leading-[2.5rem]">

Get our top quality products & services today & enjoy the best farming Experience!
                      </p>
</div>




    </div>

<div className="bg-[#263c28] lg:py-10 lg:pl-[150px]">



<div className="font-light pl-5 pr-16 lg:container lg:mx-auto grid lg:grid-cols-3 grid-cols-2 gap-y-[17px] justify-items-left">
                
                
              
<div className="col-span-full lg:col-span-1 mt-5 md:mx-10 block lg:mr-0 lg:mx-0 text-[#b3c5b5] text-left rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
  
<div className="lg:ml-5 py-5">


    <h3 className="font-extrabold text-2xl pt-4 pb-8 text-white/80">Qualigap</h3>

    <div className="md:text-[20px]"> 

             <div className="text-[#f1cf69] -ml-1">
            <MdLocationPin size={25} />
            </div>
            <div className="font-medium"> 
           <div className="relative -top-7 pl-[30px] lg:pr-20"> 
           
           {contactData.location && (
<>
{contactData.location.locale}
</>

)}

</div>
</div>


<div className="text-[#f1cf69] -ml-1">
            <HiOutlinePhone size={25} />
            </div>
            <div className="font-medium"> 
           <div className="relative -top-7 pl-[30px]">
           <p className='flex flex-col space-y-1'>
{contactData.phoneNumbers.map((phoneNumber, index) => ( 
<>
<span>{phoneNumber.number}</span>
</>

))}    
</p>

</div>
</div>




<div className="text-[#f1cf69] -ml-1">
            <MdOutlineEmail size={25} />
            </div>
            <div className="font-medium"> 
           <div className="relative -top-6 pl-[30px]">
           <p className='flex flex-col space-y-1'>
            {contactData.emails.map((email, index) => ( 
<>
<span>{email.address}</span>
</>

))}  
            </p>
           
           </div>
</div>
               
                </div>

   

   
    </div>
    </div>

    
    {/*  */}

               
<div className="mt-5 md:mx-10 lg:mx-0 text-[#b3c5b5] text-left rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
  
  <div className="lg:ml-5 lg:py-5">
  
  
      <h3 className="font-extrabold text-2xl lg:pt-4 pb-4 text-white/80">Explore</h3>
  
      <div className="px-1 font-medium md:text-[20px]"> 
  
      <ul className=''>
              
            <Link href="../about-us">
              <li className='hover:text-[#f1cf69] cursor-pointer py-4'>
                <div className="">About Us</div>
              </li> 
              </Link>

              <Link href="../our-products">
              <li className='hover:text-[#f1cf69] cursor-pointer py-4'>
                <div className="">Our Products</div>
              </li> 
              </Link>

              <Link href="../services">
              <li className='hover:text-[#f1cf69] cursor-pointer py-4'>
                <div className="">Our Services</div>
              </li> 
              </Link>
              
              <Link href="../contact-us">
              <li className='hover:text-[#f1cf69] cursor-pointer py-4'>
                <div className="">Contact Us</div>
              </li> 
              </Link>
              
              

            </ul>
                 
                  </div>
  
     
  
     
      </div>
      </div>
  
     {/*  */}

     
<div className="mt-5 md:mx-0 lg:mx-0 text-[#b3c5b5] text-left rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
  
  <div className="lg:ml-5 lg:py-5">
  
  
      <h3 className="font-extrabold text-2xl lg:pt-4 pb-4 text-white/80">Resourses</h3>
  
      <div className="px-1 font-medium md:text-[20px]"> 
  
      <ul className=''>
              
            <Link href="../blog">
              <li className='hover:text-[#f1cf69] cursor-pointer py-4'>
                <div className="">Visit Our Blog</div>
              </li> 
              </Link>

              <Link href="../gallery">
              <li className='hover:text-[#f1cf69] cursor-pointer py-4'>
                <div className="">Our Photo Gallery</div>
              </li> 
              </Link>

              <Link href="../farm-explorer">
              <li className='hover:text-[#f1cf69] cursor-pointer py-4'>
                <div className="">Farm Explorer</div>
              </li> 
              </Link>
              
              
              

            </ul>
                 
                  </div>
  
     
  
     
    
      </div>
      </div>
      {/*  */}


    
        </div>
        </div>

        <div className="bg-[#6d8c54] flex justify-center">
        <div className="lg:container flex flex-col lg:flex lg:flex-row text-white/70 pt-10 pb-5 lg:pb-10">
            <div className="lg:basis-2/4 font-medium px-4 md:text-[20px] justify-center lg:pl-24 content-center text-center lg:justify-left lg:content-left lg:text-left">
             © 2022 Qualigap Limited | Designed by StarnetTech
            </div>

            <div className="lg:basis-2/4 px-16 md:px-28 py-5 lg:-mt-3 lg:py-0 justify-center content-center text-center  lg:justify-right lg:content-right lg:text-right">

            <div className='flex flex-col mt-2 lg:mt-0'>
             
              
              
            <div className='flex items-center justify-between w-full'>

            {socials.map((soci, index) => (

              <>
                  <a key={index}
                  href={soci.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full text-[#f1cf69] bg-[#263c28] shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <img src={urlFor(soci.imgUrl)} alt={soci.title}/>
                  </div>
                </a>
              </>
               ))}




                </div>
            </div>
            </div>
        </div>
        </div>

        </footer>


  )
}

export default Footer