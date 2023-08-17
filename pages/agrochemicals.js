import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../pages/api/client';
import Image from 'next/image';
import agrochem from '../public/agrochem.jpg'
import Head from 'next/head'
import { NextSeo } from 'next-seo';




export default function AgroChemicals(){




    const [chemicals, setChemicals] = useState([]);


    useEffect(() => {
      const chemicalsquery = '*[_type == "chemicals"]';
  
      client.fetch(chemicalsquery).then((data) => {
          setChemicals(data);
        });
    
      }, []);
  
      
      return(
        <>
          <Head>
        <title>Agrochemical Products | Qualigap.com</title>
      </Head>
      <NextSeo
            title='Agrochemical Products | Qualigap.com'
            canonical='https://qualigap.com/agrochemicals'
            openGraph={{
           
              url: 'https://qualigap.com/agrochemicals',
          }}
        />
       <div className="left-0 top-0 w-full">

<div className="agrochems bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">AgroChemical Products</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>

  

  
  <div className="pb-10 md:pt-0 bg-[#334b35]">
      <div className="pt-12 justify-center lg:text-center pl-4 lg:pl-0 text-left">
      
      <h1 className="text-[#b3c5b5] font-[400] text-lg">
                      Our Products Achive
                  </h1>
             
                  <h1 className="text-white font-bold mb-1 text-[30px] lg:px-3 lg:text-[40px] lg:mb-5 pb-1">
                      Agro-Chemicals
                  </h1>
                  <button>
                  <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-8">
  
  </div>
  
  </button>
                  
    
      </div>
  
  
      
  
  
      {chemicals.length > 0 ? (
            chemicals.map((chem, index) => (
  
  <>
  
  </>
            ))
  
              ) : (
  
                  <>


<div className="bg-[#334b35]">
    <div className="md:container lg:mx-auto section-container1 flex-col lg:flex lg:flex-row lg:flex-wrap">
            
          
    <div className="md:basis-2/4 md:px-16 lg:pl-16">
                  <div className="pt-20 px-4 lg:px-0">
      
                     
                   

                      <p className="text-[#b3c5b5] font-light tracking-[0.015rem] text-[1.2rem] md:text-[1.25rem] pt-2 leading-[1.9rem] lg:px-0 pb-18">
                      Looking for high-quality agrochemicals to boost your farms productivity and yields? Look no further than our company
                      <br/>

As a leader in the agrochemical industry, we understand the importance of providing farmers with effective solutions to help them grow their crops and achieve the best possible results. We offer a wide range of agrochemicals, including fertilizers, pesticides, herbicides, and more, that are specially formulated to meet the unique needs of different crops and farming environments.
<br/><br/>
Whether you are a large-scale commercial farmer or a small-scale family farmer, we have the right agrochemicals to help you achieve your goals. Our products are designed to be easy to use and effective, and we offer comprehensive support to help you get the most out of them.
<br/><br/>
So why wait? Contact us today to learn more about how our agrochemicals can help you achieve your farming goals and take your farm to the next level.


                </p>
                      </div>
                    
      
                     
                      </div>
                      <div className="basis-2/4">

                      <div className="lg:py-20 pb-10 lg:px-16 md:px-16 px-3">
            <Image
                     src={agrochem}
                     width=''
                     height=''
                    alt='/'
                    className='rounded-[12px] lg:object-center h-[400px] w-[900px] lg:object-cover lg:h-[400px]'
                  />    
                                        <p className="text-[#b3c5b5] font-light tracking-[0.015rem] text-[1.2rem] md:text-[1.25rem] pt-6 leading-[1.9rem] lg:px-0 pb-18">
Our team of experienced professionals is dedicated to providing the best possible service to our customers. We work closely with farmers to understand their needs and challenges, and we use this information to develop innovative solutions that deliver real results.
<br/>
<br/>
Our agrochemicals are carefully tested and formulated to ensure maximum efficacy and safety. We use only the highest quality ingredients and manufacturing processes to ensure that our products are of the highest quality and meet the most stringent safety standards.
<br/>

</p>

                  </div>  

                      </div>
                      </div>
                      </div>
              </>
              
  
                  )}
            
              <div className="font-light px-4 md:container md:mx-auto md:lg-10 grid lg:grid-cols-3 grid-cols-1 gap-y-[17px] 2xl:gap-3 justify-center">
                  
                  
              {chemicals.map((chem, index) => (
  
                  <div key={index} className="bg-[#263c28] mt-16 md:mx-24 lg:ml-10 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
                  <div className="justify-center content-center text-center">
                    
                    
                
                    
                    <button><div
              style={{ size:'', color:'#f1cf69' }}
              className=''
            >
               <div className="bg-[#263c28] w-[240px] h-[240px] shadow-md border-gray-400 p-2 relative rounded-full -mt-16">
               <img src={urlFor(chem.imgUrl)} alt={chem.title} className='rounded-full w-full h-[230px]'
                />
               
              </div>
              
                  </div>
                  </button>
                  </div>
                  <div className="pb-5 px-8 ">
                  
  
                      <h3 className="font-extrabold text-2xl py-4">{chem.title}</h3>
                      <p className="leading-8 font-light">
                      
                      </p>
  
                     
                     
  
                     
                      </div>
                      </div>
                   ))};
       
       
                   
       
                  
                    
                      {/*  */}
  
                          </div>
  
                          </div>
  
            
  
      
      
    </div>
  
  
  </>
      )
  }


