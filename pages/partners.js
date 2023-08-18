import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../pages/api/client';

import Head from 'next/head'
import { NextSeo } from 'next-seo';



export default function Partners(){
  

    
    const [partners, setPartners] = useState([]);

    useEffect(() => {
         const partnersquery = '*[_type == "partners"]';
     
         client.fetch(partnersquery).then((data) => {
             setPartners(data);
           });
       
         }, []);
   
  
    return(
      <>
            <Head>
        <title>Products Gallery | Qualigap.com</title>
      </Head>
      <NextSeo
            title='Products Gallery | Qualigap.com'
            canonical='https://qualigap.com/gallery'
            openGraph={{
           
              url: 'https://qualigap.com/gallery',
          }}
        />
       <div className="left-0 top-0 w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Our Partners</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>



<div className="pb-10 md:pt-0 bg-[#334b35] sm:px-10 lg:px-16">
    <div className="pt-12 justify-center text-center">
    

    <h1 className="text-[#b3c5b5] font-[400] text-lg pb-6 px-10">
                    Our Partners contributing to Agricultural growth and innovations
                </h1>




{partners.length > 0 ? (

  
<>

</>
) : (
  <>

  </>
  )}


<div className="mx-auto max-w-2xl pt-10 pb-16 px-4 sm:py-24 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-center">
  
      <div className="grid grid-cols-1 gap-y-14 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-10">
      







{partners.length > 0 && (
    <>
    {partners.map((partner, index) => (
          
    <div key={index} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
        <img 
          src={urlFor(partner.imgUrl)} 
          alt={partner.title}

          objectFit=""
          className=
            'duration-700 w-[400px] h-[200px] relative object-center rounded-xl ease-in-out group-hover:opacity-75 scale-100 grayscale-0'
          
        />
        
        <p className='pt-2 font-medium text-white/90 text-[20px] px-6 lg:px-10'>{partner.title}</p>
        
      </div>
     
    </div>
    
    ))}
    </>
          )}



    </div>
    </div>
  
    </div>

                        </div>


    
    
  </div>


</>
    )
}