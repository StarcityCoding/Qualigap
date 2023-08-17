import Image from 'next/image';
import Head from 'next/head'
import Link from 'next/link';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import seedlings from '../public/seedlings.jpg'
import agrochem from '../public/agrochem.jpg'
import seeds from '../public/seeds.jpg'
import fertilizers from '../public/fertilizers.jpg'
import { GiChemicalDrop,GiWorld, GiPlantSeed, GiFarmTractor, GiChemicalTank, GiFarmer, GiMasterOfArms, GiSeedling, GiFertilizerBag } from "react-icons/gi";
import { NextSeo } from 'next-seo';




export default function OurProducts(){
    return(
      <>
            <Head>
        <title>Our Products | Qualigap.com</title>
      </Head>
      <NextSeo
            title='Our Products | Qualigap.com'
            canonical='https://qualigap.com/our-products'
            openGraph={{
           
              url: 'https://qualigap.com/our-products',
          }}
        />
       <div className="left-0 top-0 w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Products Achive</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>



<div className="pb-24 md:pt-0 bg-[#334b35]">
    <div className="pt-12 justify-center text-center">
    

           
                <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-5 pb-1">
                    Our Products
                </h1>
                <button>
                <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-4">

</div>

</button>
                
  
    </div>

    <div className="font-light px-4 md:container md:mx-auto md:lg-10 grid lg:grid-cols-3 grid-cols-1 gap-y-[17px] 2xl:gap-3 justify-items-center">
                
                
              
                <div className="bg-[#263c28] mt-5 md:mx-24 lg:mx-0 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
                <Image
                    src={agrochem}
                    width='900px'
                    height='665px'
                    alt='/'
                    className='rounded-tr-[12px] rounded-tl-[12px] relative'
                  />
                  <button><div
            style={{ size:'45px', color:'#f1cf69' }}
            className='text-center justify-center rotator-ef'
          >
             <div className="bg-[#263c28] shadow-md border-gray-400 p-4 rounded-full relative -mt-16 content-center justify-center">
            <GiChemicalDrop size={70} />
            </div>
            
                </div>
                </button>
                <div className="lg:ml-5 py-3 px-8 ">
                

                    <h3 className="font-extrabold text-2xl py-4">Chemicals</h3>
                    <p className="leading-8 font-light">
                    Agrochemicals that prevent the plants from insecticide, fungicide, herbicide, acaricide, also serving as regulators and stimulants.
                    </p>

                   <Link href="../agrochemicals">
                    <button> 
                      
                      <div
                  style={{ size:'', color:'#263c28' }}
                  className=''
                >
                   <div className="hover:scale-105 ease-in duration-300 bg-[#f1cf69] mt-4 w-[45px] hover:bg-opacity-60 hover:text-white/70 shadow-md border-gray-400 p-2 rounded-full">
                  <HiOutlineArrowNarrowRight size={30} />
                  </div>
                      </div>
                   </button>
                   </Link>

                   
                    </div>
                    </div>
                    {/*  */}


                    <div className="bg-[#263c28] mt-5 md:mx-24 lg:mx-0 lg:ml-5 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
                <Image
                    src={fertilizers}
                    width=''
                    height='620px'
                    alt='/'
                    className='rounded-tr-[12px] rounded-tl-[12px] relative'
                  />
                  <button><div
            style={{ size:'45px', color:'#f1cf69' }}
            className='text-center justify-center rotator-ef'
          >
             <div className="bg-[#263c28] shadow-md border-gray-400 p-4 rounded-full relative -mt-16 content-center justify-center">
            <GiFertilizerBag size={70} />
            </div>
            
                </div>
                </button>
                <div className="lg:ml-5 py-3 px-8 ">
                

                    <h3 className="font-extrabold text-2xl py-4">Fertilizers</h3>
                    <p className="leading-8 font-light">
                    When added to soil or water, plants can develop tolerance against pests like weeds, insects and diseases.
                 </p>

                 <Link href="../fertilizers">
                    <button> 
                      
                      <div
                  style={{ size:'', color:'#263c28' }}
                  className=''
                >
                   <div className="hover:scale-105 ease-in duration-300 bg-[#f1cf69] mt-4 w-[45px] shadow-md border-gray-400 p-2 rounded-full hover:bg-opacity-60 hover:text-white/70">
                  <HiOutlineArrowNarrowRight size={30} />
                  </div>
                      </div>
                   </button>
                   </Link>

                   
                    </div>
                    </div>

                    {/*  */}

                    

                    <div className="bg-[#263c28] mt-5 md:mx-24 lg:mx-0 lg:ml-5 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
                <Image
                    src={seeds}
                    width=''
                    height='500px'
                    alt='/'
                    className='rounded-tr-[12px] rounded-tl-[12px] relative'
                  />
                  <button><div
            style={{ size:'45px', color:'#f1cf69' }}
            className='text-center justify-center rotator-ef'
          >
             <div className="bg-[#263c28] shadow-md border-gray-400 p-4 rounded-full relative -mt-16 content-center justify-center">
            <GiPlantSeed size={70} />
            </div>
            
                </div>
                </button>
                <div className="lg:ml-5 py-3 px-8 ">
                

                    <h3 className="font-extrabold text-2xl py-4">Seedlings</h3>
                    <p className="leading-8 font-light">
                    Replenish organic matter, Increase yields and reduce fertilizer costs by planting crops that add nitrogen to the soil.
                     </p>

                     <Link href="../seedlings">
                    <button href=""> 
                      
                      <div
                  style={{ size:'', color:'#263c28' }}
                  className=''
                >
                   <div className="hover:scale-105 ease-in duration-300 bg-[#f1cf69] mt-4 w-[45px] shadow-md border-gray-400 p-2 rounded-full hover:bg-opacity-60 hover:text-white/70">
                  <HiOutlineArrowNarrowRight size={30} />
                  </div>
                      </div>
                   </button>
                   </Link>

                   
                    </div>
                    </div>

                    
                    {/*  */}
              
           
                    
                        </div>










                        </div>


    
    
  </div>


</>
    )
}