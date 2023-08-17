import React, { useState, useEffect } from 'react';
import { urlFor, client } from './api/client'
import Image from 'next/image';
import seeds from '../public/seeds.jpg'
import Head from 'next/head'




export default function SeedlingProducts(){




    const [seedlings, setSeedlings] = useState([]);


    useEffect(() => {
      const seedlingsquery = '*[_type == "seedlings"]';
  
      client.fetch(seedlingsquery).then((data) => {
          setSeedlings(data);
        });
    
      }, []);
  
      
      return(
        <>
          <Head>
        <title>Seedling Products | Qualigap.com</title>
      </Head>
       <div className="left-0 top-0 w-full">

<div className="seedlings bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Seedling Products</h1>
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
                      Seedlings
                  </h1>
                  <button>
                  <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-8">
  
  </div>
  
  </button>
                  
    
      </div>
  
  
      
  
  
      {seedlings.length > 0 ? (
            seedlings.map((seed, index) => (
  
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
                      Looking to enhance your farms productivity with high-quality seedlings? Look no further than our company, the leading provider of premium seedlings for farms of all sizes.
                                  <br/>
            
            Our seedlings are carefully cultivated using the latest techniques and state-of-the-art technology to ensure optimal growth, yield, and disease resistance. We specialize in a wide range of seedlings, including vegetables, fruits, and ornamental plants, each tailored to meet your unique needs and specifications.
            <br/><br/>
            With our years of experience in the industry and a team of skilled professionals, we can help you achieve the best results from your farm. Whether you are looking to expand your crop selection, improve yields, or reduce crop losses, our seedlings are the ideal solution.
            
                            </p>
                      </div>
                    
      
                     
                      </div>
                      <div className="basis-2/4">

                      <div className="lg:py-20 pb-10 lg:px-16 md:px-16 px-3">
            <Image
                     src={seeds}
                     width=''
                     height=''
                    alt='/'
                    className='rounded-[12px] lg:object-center h-[400px] w-[900px] lg:object-cover lg:h-[400px]'
                  />    
                                        <p className="text-[#b3c5b5] font-light tracking-[0.015rem] text-[1.2rem] md:text-[1.25rem] pt-6 leading-[1.9rem] lg:px-0 pb-18">
                                        Our seedlings are not only of the highest quality, but they are also affordable and easy to cultivate. We provide comprehensive support and guidance to ensure that your farms production is maximized and you get the best returns on your investment.
                                                    <br/><br/>
            Dont settle for subpar seedlings that can hurt your farms performance. Choose our company for top-quality seedlings that are sure to boost your farms productivity and profitability. Contact us today to learn more about how we can help you get the best seedlings for your farm
            
            
            
            
            </p>
            
                  </div>  

                      </div>
                      </div>
                      </div>
              </>
              
  
                  )}
            
              <div className="font-light px-4 md:container md:mx-auto md:lg-10 grid lg:grid-cols-3 grid-cols-1 gap-y-[17px] 2xl:gap-3 justify-center">
                  
                  
              {seedlings.map((seed, index) => (
  
                  <div key={index} className="bg-[#263c28] mt-16 md:mx-24 lg:ml-10 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
                  <div className="justify-center content-center text-center">
                    
                    
                
                    
                    <button><div
              style={{ size:'', color:'#f1cf69' }}
              className=''
            >
               <div className="bg-[#263c28] w-[240px] h-[240px] shadow-md border-gray-400 p-2 relative rounded-full -mt-16">
               <img src={urlFor(seed.imgUrl)} alt={seed.title} className='rounded-full w-full h-[230px]'
                />
               
              </div>
              
                  </div>
                  </button>
                  </div>
                  <div className="pb-5 px-8 ">
                  
  
                      <h3 className="font-extrabold text-2xl py-4">{seed.title}</h3>
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


