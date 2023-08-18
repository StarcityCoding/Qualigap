import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../pages/api/client';
import Image from 'next/image';
import Link from 'next/link';


const Clients = () => {
    
const [partners, setPartners] = useState([]);

 useEffect(() => {
      const partnersquery = '*[_type == "partners"]';
  
      client.fetch(partnersquery).then((data) => {
          setPartners(data);
        });
    
      }, []);


  return (
<>
{/* <ScrollAnimation animateIn='fadeIn'>
     <div className="pb-16 pt-12 bg-[#5b7445ea]"> */}




{partners.length > 0 ? (

  
  <>

  </>
) : (
    <>

    </>
    )}



{partners.length > 0 && (

  <div className="pb-12 pt-8 bg-[#5b7445ea]">
  <div className="justify-center text-center">
    

           
    <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-2 pb-1">
        Our Partners
    </h1>
    <button>
    <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-10">

</div>

</button>
    

</div>
  <div className="w-full font-light flex justify-center items-center px-4 md:mx-auto md:lg-10">


  {/* <div className='w-full flex items-center justify-center space-x-24'> */}
  <section className={`flex justify-center items-center sliderc w-full`}>
    <div className={`flex justify-center items-center w-full slidesc lg:hidden`}>
{partners.map((partner, index) => (
  
  <Link key={index} href={`${partner.link}`} className={`sm:flex-1 flex justify-center items-center relative mx-10 md:mx-5`}>
                   <img src={urlFor(partner.imgUrl)} alt={partner.title} className='opacity-70 md:opacity-40 w-[80px]'
                />
  </Link>
        ))}
          </div>
    <div className={`justify-center items-center w-full slidesc4 hidden lg:flex`}>
{partners.map((partner, index) => (
  
  <Link key={index} href={`${partner.link}`} className={`sm:flex-1 flex justify-center items-center relative mx-14`}>
                   <img src={urlFor(partner.imgUrl)} alt={partner.title} className='opacity-70 w-[90px]'
                />
  </Link>
        ))}
          </div>
          </section>



            </div>
        </div>


        )}
    

        {/* </div>

      

</ScrollAnimation> */}
        </>
  )
}

export default Clients