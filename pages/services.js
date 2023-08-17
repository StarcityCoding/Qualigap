import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import agroconsultant from '../public/agroconsultant.png'
import seedlings from '../public/seedlings.jpg'
import { BiUserVoice } from 'react-icons/bi';
import Head from 'next/head'
import { urlFor, client } from '../pages/api/client';
import { GiFarmTractor } from "react-icons/gi";




export default function OurServices(){
    const [services, setServices] = useState([]);
    const [vision, setVision] = useState([]);

    useEffect(() => {
    const servicesquery = '*[_type == "services"]';
    const visionquery = '*[_type == "vision"]';

    client.fetch(servicesquery).then((data) => {
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
    setServices(sortedData);
      });

      client.fetch(visionquery).then((data) => {
        setVision(data);
      });


    }, []);

    return(
      <>
        <Head>
        <title>Our Services | Qualigap.com</title>
      </Head>
       <div className="left-0 top-0 w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Our Services</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>



<div className="bg-[#6d8c54] lg:mx-auto section-container1 flex-col lg:flex lg:flex-row lg:flex-wrap">
       
       
       
       <div className="md:basis-2/4 px-5 py-5 md:mx-auto md:px-[110px] lg:px-20 text-white justify-center text-center md:justify-start md:text-left">

            

       <div className="pt-12 md:text-center lg:text-left">

<h1 className="text-[#b3c5b5] font-[400] text-lg">
               Modern Agriculture
           </h1>
      
           <h1 className="text-white font-bold mb-1 text-[30px] lg:text-[40px] pb-1">
               Our Agro Services
           </h1>
           <button>
           <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px]">

</div>

</button>
           

</div>
            {services.map((service, index) => (       
           <div key={index} className="py-5 border-b-[#FFFFFF33] border-b-[2px] last:border-b-0">
           

            
           <div className="pt-5">
           <button><div
       style={{ size:'45px', color: '#f1cf69' }}
       className=''
     >
        <div className="bg-[#263c28] p-5 rounded-full md:absolute">
        <img src={urlFor(service.imgUrl)} alt={service.title} className='' />
       </div>
       
           </div>
           </button>
           <div className="md:relative md:pl-[140px] md:-top-3">
           <h1 className="font-bold text-2xl py-3">
           {service.title}
           </h1>
           
           <p className="text-[#dbe6d2] font-[400] text-[18px] leading-9 pb-2">
           {service.description}
           </p>
           </div>
           </div>


               </div>
    ))}    
               {/*  */}






           

       </div>
       
       <div className="md:basis-2/4 md:mx-auto px-4 md:px-[120px] lg:px-20 pt-5 pb-12 justify-center text-center lg:text-left content-center bg-green-800 lg:bg-transparent">
     
       {vision.map((vis, index) => (
        <>
       <div className="pt-12">

<h1 className="text-[#b3c5b5] font-[400] text-lg">
               We are dedicated to
           </h1>
      
           <h1 className="text-white font-bold mb-1 text-[30px] lg:text-[40px] pb-1">
               Providing high quality products
           </h1>
           <button>
           <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px]">

</div>

</button>
</div>
          
<div className="pt-5 lg:hidden">
<img src={urlFor(vis.imgUrl)} height="350px" width="500px" alt={vis.title} className='rounded-[12px] object-left h-[350px] w-[500px] object-cover lg:h-[350px]'
                  />
            {/* <Image
                     src={agroconsultant}
                     width="500px"
                     height="600px"
                    alt='/'
                    className='rounded-[12px] object-left h-[600px] w-[500px] object-cover lg:h-[250px]'
                  />     */}
                  </div>   
            <div className="hidden lg:contents">
            <div className="pt-5">
            <img src={urlFor(vis.imgUrl)} alt={vis.title} className='rounded-[12px] object-left h-[400px] w-[800px] object-cover lg:h-[350px]'
                  />
          
            {/* <Image
                     src={agroconsultant}
                     width=""
                     height=""
                    alt='/'
                    className='rounded-[12px] object-left h-[400px] w-[800px] object-cover lg:h-[250px]'
                  />     */}
                  </div>   
                  </div>   

             <div className="pt-12">

<h1 className="text-[#b3c5b5] font-[400] text-lg">
               what we aim for
           </h1>
      
           <h1 className="text-white font-bold text-[30px] lg:text-[40px] pb-1">
               Our Vision
           </h1>
           <button>
           <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px]">

</div>

</button>
</div>
<p className="leading-9 mt-4 font-light px-2 md:px-0 text-[18px] text-[#dbe6d2]">
          
{vis.description}

                </p>

                </>
))}

       
       </div>

       

   </div>



    
    
  </div>


</>
    )
}