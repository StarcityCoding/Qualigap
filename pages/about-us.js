import React, { useState, useEffect } from 'react';
import corn from '../public/corn.jpg'
import Image from "next/image";
import Head from 'next/head'
import { urlFor, client } from '../pages/api/client';
import { GiFarmTractor, GiFarmer, GiSeedling } from "react-icons/gi";
import {PortableText} from '@portabletext/react'




export default function AboutUs(){

    const [aboutus, setAboutus] = useState([]);
    const [ourhistory, setOurhistory] = useState([]);
    const [ourvalues, setOurvalues] = useState([]);
  
    useEffect(() => {
    const aboutusquery = '*[_type == "aboutus"]';
    const ourhistoryquery = '*[_type == "ourhistory"]';
    const ourvaluesquery = '*[_type == "ourvalues"]';
  
      client.fetch(aboutusquery).then((data) => {
        setAboutus(data);
      });
      
      client.fetch(ourhistoryquery).then((data) => {
        setOurhistory(data);
      });

      client.fetch(ourvaluesquery).then((data) => {
        setOurvalues(data);
      });
      
      
    //   client.fetch(servicesquery).then((data) => {
    //     const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
    // setServices(sortedData);
    //   });
      
  
    }, []);

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
    return(
      <>
            <Head>
        <title>About Us | Qualigap.com</title>
      </Head>
       <div className="left-0 top-0 w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">About Us</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>



     <div className="bg-[#2d442f] bg-opacity-90">
    <div className="md:container lg:mx-auto section-container1 flex-col lg:flex lg:flex-row lg:flex-wrap">
            
          
    <div className="md:px-10 lg:pl-16">
                  <div className="pt-20 px-4 lg:px-0">
                  {aboutus.map((about, index) => (
                    <>
                      <h1 className="text-[#b3c5b5] font-[400] text-lg">
                          who we are
                      </h1>
                      <h1 className="text-white font-bold font-Averia leading-12 mb-1 text-[45px] lg:text-[55px] lg:mb-5 pb-1">
                         {about.name}
                      </h1>
                      <button>
                      <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] my-4">
      
      </div>
      
      </button>
      <Image
                     src={corn}
                     width=''
                     height=''
                    alt='/'
                    className='rounded-[12px] lg:float-right object-cover h-[400px] w-[900px] lg:w-[600px] lg:h-[400px] lg:my-8 mb-6 lg:mb-8 lg:ml-10'
                  />    
             
                      <div className="text-[#b3c5b5] portable text-justify font-light tracking-[0.015rem] text-[1.2rem] md:text-[1.25rem] pt-2 leading-[1.9rem] lg:px-0 pb-18">
                 
                 
                      <PortableText
        value={about.description}
       
      />
               </div>
               </>

))}
   


                      </div>
                    
      
                     
                      </div>
                      {/* <div className="basis-2/4">

                      <div className="lg:py-20 pb-10 lg:px-16 md:px-16 px-3">
            <Image
                     src={corn}
                     width=''
                     height=''
                    alt='/'
                    className='rounded-[12px] lg:object-center h-[400px] w-[900px] lg:object-cover lg:h-[400px]'
                  />    
                  </div>  

                      </div> */}
                      </div>
                      </div>



                      
        <div className="bg-slate-300">
        <div className="pt-10 pb-16 md:container px-0 md:mx-auto flex-col lg:flex lg:flex-row lg:flex-wrap">
            
            
            <div className="md:basis-2/4">
            
            
        <div className="fadeer">
            {/* <div
            style={{ color: 'white', size:'35px' }}
            className='hidden lg:contents lg:at-item'
          >
            <div className="hidden lg:contents">
            <div className="bg-green-700 p-2 rounded-xl absolute">
            <FaInfo size={30} />
            </div>
            </div> 
            </div>*/}
            
          
        <div className="bg-slate-300 mb-10 md:mb-0 md:shadow-transparent pt-10 pb-4 md:pt-5 px-6 md:rounded-none md:px-10 lg:px-16 md:mt-0">
            <div className="pr-5">
                <h1 className="text-gray-700 font-bold mb-1 text-2xl lg:mb-5 pb-1">
                    Our History
                </h1>
                <div className="border-b-green-700 border-b-[5px] w-[65px] mb-4">

</div>
                <div className="text-gray-900 font-light portable text-[18px] md:text-[20px] pt-2 leading-[1.9rem] pb-3">
              
                {ourhistory.map((history, index) => (     
                                          <PortableText
                                          value={history.description}
                                         
                                        />
                    ))}
                </div>
                </div>

               
                </div>
                     
               
                    </div>   
                     
                    

                               
            
            </div>
            
            <div className="md:basis-2/4">

                 


        <div className="">
            <div className="mx-auto px-5 md:px-10">
           
                <h1 className="text-gray-700 font-bold text-2xl pb-1 md:pt-5">
                    Our Values
                </h1>
                <div className="border-b-green-700 border-b-[5px] w-[65px] my-3 mb-6">

                </div>
   
             
             {/*  */}

             {ourvalues.map((values, index) => (
               <div key={index} className="pb-10">
                <div
            style={{ color: 'white', size:'45px' }}
            className=''
          >
             <div className="bg-green-700 p-2 rounded-full absolute mt-2">
             <img src={urlFor(values.imgUrl)} alt={values.title} className='w-[60px]' />
            </div>
            
                </div>
                <div className="relative pl-[82px] pt-1">
                <p className="text-gray-900 font-light text-[18px] md:text-[20px] leading-8">
                <span className="font-[550]"> {values.title} </span>
                {values.description}

            
                </p>
                </div>
                </div>
                    ))}    
                {/*  */}



</div>
                </div>
                
               




            </div>

            

        </div>
        </div>


    
    
  </div>


</>
    )
}