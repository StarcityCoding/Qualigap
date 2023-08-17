
import Image from 'next/image';
import seeds from '../public/seeds.jpg';import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../pages/api/client';
import seedlings from '../public/seedlings.jpg'
import agrochem from '../public/agrochem.jpg'
import corn from '../public/corn.jpg'
import fertilizers from '../public/fertilizers.jpg'
import tractor from '../public/tractor.jpg'
import abstract from '../public/abstract.jpg'
import fertilizer from '../public/fertilizer.jpg'
import Head from 'next/head'



export default function Gallery(){
  

  const [gallery, setGallery] = useState([]);


  useEffect(() => {
    const galleryquery = '*[_type == "gallery"]';

    client.fetch(galleryquery).then((data) => {
        setGallery(data);
      });
  
    }, []);

  
    return(
      <>
            <Head>
        <title>Products Gallery | Qualigap.com</title>
      </Head>
       <div className="left-0 top-0 w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Our Products Gallery</h1>
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
                    Our Products gallery
                </h1>
           
                <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-5 pb-1">
                    Gallery
                </h1>
                <button>
                <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-4">

</div>

</button>




<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-center">
  
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      





      {gallery.map((gal, index) => (
          
    <div key={index} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
        <img 
          src={urlFor(gal.imgUrl)} 
          alt={gal.title}
        
          height="350px"
          width="400px"
          objectFit=""
          className=
            'duration-700 h-[350px] w-[400px] object-cover relative object-center rounded-xl ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
        
      </div>
     
    </div>
    
    ))};
       



    </div>
    </div>
  
    </div>

                        </div>


    
    
  </div>


</>
    )
}