import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../pages/api/client';
import Head from 'next/head'



export default function Fertilzers(){

  const [ureaFertilizer, setUreaFertilizer] = useState([]);
  const [npkFertilizer, setNpkFertilizer] = useState([]);

  useEffect(() => {
  const ureaFertilizerquery = '*[_type == "ureaFertilizer"]';
  const npkquery = '*[_type == "npkFertilizer"]';

    client.fetch(ureaFertilizerquery).then((data) => {
      setUreaFertilizer(data);
    });


    client.fetch(npkquery).then((data) => {
      setNpkFertilizer(data);
    });
    
  }, []);

    return(
      <>
      <Head>
        <title>Fertilizer Products | Qualigap.com</title>
      </Head>
       <div className="left-0 top-0 w-full">

<div className="fertilizers bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Fertilzer Products</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>



<div className="pb-10 md:pt-0 bg-[#334b35]">
    <div className="pt-12 justify-center text-center">
    
    <h1 className="text-[#b3c5b5] font-[400] text-lg">
                    Our Products Achive
                </h1>
           
                <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-5 pb-1">
                    Urea fertilizers
                </h1>
                <button>
                <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-4">

</div>

</button>
                
  
    </div>
            <div className="font-light px-4 md:container md:mx-auto md:lg-10 grid lg:grid-cols-3 grid-cols-1 gap-y-[17px] 2xl:gap-3 justify-center">
                
                
            {ureaFertilizer.map((urea, index) => (
              <>
                <div key={index} className="bg-[#263c28] mt-16 md:mx-24 lg:ml-10 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
                <div className="justify-center content-center text-center">
                  
                  
              
                  
                  <button><div
            style={{ size:'', color:'#f1cf69' }}
            className=''
          >
             <div className="bg-[#263c28] w-[240px] h-[240px] shadow-md border-gray-400 p-2 relative rounded-full -mt-16">
             <img src={urlFor(urea.imgUrl)} alt={urea.title} className='rounded-full w-full h-[230px]'
              />
             
            </div>
            
                </div>
                </button>
                </div>
                <div className="pb-5 px-8 ">
                

                    <h3 className="font-extrabold text-2xl py-4">{urea.title}</h3>
                    <p className="leading-8 font-light">
                    
                    </p>

                   
                   

                   
                    </div>
                    </div>
               
                    </>
                    ))}
                  




                        </div>





                        <div className="pt-24 justify-center text-center">
    
           
                <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-5 pb-1">
                    NPK fertilizers
                </h1>
                <button>
                <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-4">

</div>

</button>
                
  
    </div>

                  
    <div className="font-light px-4 md:container md:mx-auto md:lg-10 grid lg:grid-cols-3 grid-cols-1 gap-y-[17px] 2xl:gap-3 justify-center">
           
                               
            {npkFertilizer.map((npk, index) => (
              <>
                <div className="bg-[#263c28] mt-16 md:mx-24 lg:ml-10 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
                <div className="justify-center content-center text-center">
                  
                  
              
                  
                  <button><div
            style={{ size:'', color:'#f1cf69' }}
            className=''
          >
             <div className="bg-[#263c28] w-[240px] h-[240px] shadow-md border-gray-400 p-2 relative rounded-full -mt-16">
             <img src={urlFor(npk.imgUrl)} alt={npk.title} className='rounded-full w-full h-[230px]'
              />
             
            </div>
            
                </div>
                </button>
                </div>
                <div className="pb-5 px-8 ">
                

                    <h3 className="font-extrabold text-2xl py-4">{npk.title}</h3>
                    <p className="leading-8 font-light">
                    
                    </p>

                   
                   

                   
                    </div>
                    </div>
               
                    </>
                    ))}
                  
                    {/*  */}




                        </div>



                        </div>


    
    
  </div>


</>
    )
}