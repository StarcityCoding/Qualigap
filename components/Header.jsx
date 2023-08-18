import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../pages/api/client';
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine } from 'react-icons/ri';
import "animate.css/animate.min.css";
import {LiaBlogSolid} from "react-icons/lia"




import { GiCheckMark, GiChemicalDrop, GiFarmer, GiFarmTractor, GiFertilizerBag, GiPlantSeed, GiSeedling, GiWorld } from 'react-icons/gi'

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlineUsergroupDelete } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaSeedling } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsInfo, BsInfoLg } from 'react-icons/bs';
import { GrGallery, GrBlog } from 'react-icons/gr';
import { TiContacts } from 'react-icons/ti';

import Link from 'next/link';
import { BiPhotoAlbum } from 'react-icons/bi';

const pages1 = [{name: 'Our Partners', slug: 'partners'},{name: 'Contact Us', slug: 'contact-us'}]

const Header = () => {
   
  useEffect(() => {
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
 }, []);
  const [color, setColor] = useState(false)
  useEffect(() => {
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
}, []);



  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [toggleMenu, setToggleMenu] = useState(false);

  const [categories, setCategories] = useState([]);

  const [socials, setSocials] = useState([]);


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const socialsquery = '*[_type == "socials"]';

    client.fetch(socialsquery).then((data) => {
      setSocials(data);
    });


    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);


  return (
  

    <header className={color ? 'header header-bg shadow-md' : 'header'}>
      <nav className="container mx-auto flex px-10 items-center flex-row w-full lg:py-7 py-5">
        <div className="block lg:basis-1/4 basis-3/4">
          <Link href="/">
            <span className="flex cursor-pointer font-bold text-lg text-white/80">
            <span
            style={{ size:'15px' }}
            className='text-white/80 absolute'
          >
             <span className="rounded-full">
            <FaSeedling size={25} />
            </span>
            
                </span>
               <span className="pl-7"> Qualigap</span></span>
          </Link>
        </div>
        <div className="hidden lg:contents">
          <div className="basis-3/4">
            <div className="float-left text-white/60">

            <Link href={`../about-us`}>
           <span className="hover:text-[#f1cf69] visited:text-[#f1cf69] mal mt-2 align-middle ml-8 font-medium cursor-pointer">
             About Us
             </span>
          </Link>
         
            <span className="align-middle ml-8 pt-1 font-medium cursor-pointer dropdown">
  <button className="dropbtn"><span className="inline-flex hover:text-[#f1cf69]">Our Products  <span className="">
                  < RiArrowDropDownLine size={30} />
                  </span></span> </button>
  <span className="dropdown-content bg-[#334b35] fixed z-10 text-white/80 rounded-lg pt-8 pb-3">
    <Link href="../fertilizers">Fertilizer Products</Link>
    <Link href="../agrochemicals">Chemical Products</Link>
    <Link href="../seedlings">Certified Seeds</Link>
    
  </span>
</span>
<Link href={`../services`}>
           <span className="hover:text-[#f1cf69] visited:text-[#f1cf69] mal mt-2 align-middle ml-8 font-medium cursor-pointer">
             Our Services
             </span>
          </Link>
         {pages1.map((pages) => (
          <Link key={pages.slug} href={`/${pages.slug}`}>
           <span className="hover:text-[#f1cf69] mt-2 align-middle ml-8 font-medium cursor-pointer">
             {pages.name}
             </span>
          </Link>
         ))}
         
 

      
          </div>
          <div className="float-right">
         
          <Link href="../contact-us">
            <span className="duration-300 hover:bg-[#f1cf69] hover:text-green-900 bg-green-700 font-normal hover:scale-105 ease-in rounded-md text-gray-200 px-6 ml-5 py-3 cursor-pointer">Contact Us</span>
          </Link>
          </div>
          </div>
          </div>


          {/* Hamburger Icon */}
        <div
            style={{ color: 'white' }}
            onClick={handleNav}
            className='lg:hidden basis-1/4'
          >
            <div className="float-right">
            <RiMenu3Line size={25} />
            </div>
            
          </div>

        
         
        <div
        className={
          nav ? 'lg:hidden fixed right-3 top-3 -right-5 bottom-3 w-[95%] z-10 h-[90%] fadein-right' : ''
        }
      >
        {/* Side Drawer Menu */}

        <div
          className={
            nav
              ? 'fixed right-3 top-3 bottom-3 w-[95%] h-[90%] md:h-fit rounded-xl grade-bgd bg-[#263c28] shadow-md p-10 fadein-right'
              : 'fixed right-[-150%] top-3 p-10 ease-out duration-500 grade-bgh bg-[#263c28]'
          }
        >
            <div className='flex w-full items-center justify-between'>
            <Link href='/'>
              <div onClick={() => setNav(false)}>
              
              
            <FaSeedling size={25} className="text-white/80" />
            
            </div>
                
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-[#5f744d] text-white/80 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className='py-4 flex flex-row'>
              <div className="basis-2/4">
              <h1 className="font-bold text-[#6d8c54] text-sm pb-2">
                Our Products
              </h1>
            <ul className='text-white/60'>
              
              
            <Link href='../agrochemicals'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <GiChemicalDrop size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Agrochemicals</div>
              </li></Link>

              <Link href='../fertilizers'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <GiFertilizerBag size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Fertilizers</div>
              </li></Link>

              <Link href='../seedlings'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'>
                <div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <GiPlantSeed size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Certified Seeds</div>
              </li></Link>


            </ul>
              </div>
              {/*  */}
              <div className="basis-2/4">
              <h1 className="font-bold text-[#6d8c54] text-sm pb-2">
                Our Services
              </h1>
            <ul className='text-white/60'>
              
              
              
            <Link href='../services'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <AiOutlineUsergroupDelete size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Consultancy</div>
              </li></Link>

              <Link href='../services'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <GiFarmTractor size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Extension Service</div>
              </li></Link>

              <Link href='../services'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <GiFarmer size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Dealer, Supply, Reatail</div>
              </li></Link>
        


            </ul>
              </div>
              
              </div>

              {/*  */}

              <div className='py-4 flex flex-row'>
              <div className="basis-2/4">
              <h1 className="font-bold text-[#6d8c54] text-sm pb-2">
                Know More
              </h1>
              <ul className='text-white/60'>
              
              
              
            <Link href='../about-us'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <BsInfoLg size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">About Us</div>
              </li></Link>

              <Link href='../contact-us'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='text-white/50 absolute'
          >
             <div className="rounded-full">
            <TiContacts size={15} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Contact Us</div>
              </li></Link>

               
               </ul>
              </div>
              <div className="basis-2/4">
              <h1 className="font-bold text-[#6d8c54] text-sm pb-2">
                Resourses
              </h1>
              <ul className='text-white/60'>
              
              
              <Link href='../partners'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='absolute'
          >
             <div className="rounded-full">
            <GiWorld size={12} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Our Partners</div>
              </li></Link>


            <Link href='../blog'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='absolute'
          >
             <div className="rounded-full">
            <LiaBlogSolid size={12} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Our Blog</div>
              </li></Link>
              
 

              <Link href='../gallery'>
              <li onClick={() => setNav(false)} className='cursor-pointer py-4 text-sm'><div
            style={{ size:'15px' }}
            className='absolute'
          >
             <div className="rounded-full">
            <BiPhotoAlbum size={12} />
            </div>
            
                </div> <div className="relative -top-1 pl-[25px]">Photos Gallery</div>
              </li></Link>

               
               </ul>
              </div>
              </div>





              <div className='flex flex-col mt-2'>
              <h1 className="font-bold text-white/60 text-sm pb-5">
                Connect With Us
              </h1>
              
              
            <div className='flex items-center justify-between w-full sm:w-[80%]'>

            {socials.map((soci, index) => (

                 <>
                  <a key={index}
                  href={soci.link}
                  target='_blank'
                  rel='noreferrer'
                >
                 <div onClick={() => setNav(!nav)} className='rounded-full shadow-lg bg-[#36521f] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <img src={urlFor(soci.imgUrl)} alt={soci.title}/>
                  </div>
                </a>
              </>
               ))}

                </div>
            </div>


        </div>

{/*  */}

        {/* <div
          className={
            naxv
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              
              
              {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>{category.name}
              </li></Link>
          ))}


            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href=''
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaInstagram />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
 */}

        {/*  */}
      </div>

      

      </nav>

       
    </header>

    
  );
};

export default Header;
