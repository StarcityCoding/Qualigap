import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { FaInfo, FaUserCog } from 'react-icons/fa'
import { BiUserVoice } from 'react-icons/bi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import "animate.css/animate.min.css";
import seedlings from '../public/seedlings.jpg'
import agrochem from '../public/agrochem.jpg'
import agroconsultant from '../public/agroconsultant.png'
import corn from '../public/corn.jpg'
import seeds from '../public/seeds.jpg'
import fertilizers from '../public/fertilizers.jpg'
import tractor from '../public/tractor.jpg'
import abstract from '../public/abstract.jpg'
import fertilizer from '../public/fertilizer.jpg'
import { TbArrowRight } from "react-icons/tb";
import { GiChemicalDrop,GiWorld, GiPlantSeed, GiFarmTractor, GiChemicalTank, GiFarmer, GiMasterOfArms, GiSeedling, GiFertilizerBag } from "react-icons/gi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { urlFor, client } from '../pages/api/client';
import Clients from './Clients';



const HomeInfos = () => {

    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    const [whowearehome, setWhowearehome] = useState([]);
    const [services, setServices] = useState([]);
    const [vision, setVision] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [products, setProducts] = useState([]);
    
   const [contactData, setContactData] = useState({  location: null, phoneNumbers: [], emails: [] });
  
    useEffect(() => {
    const whowearehomequery = '*[_type == "whowearehome"]';
    const servicesquery = '*[_type == "services"]';
    const visionquery = '*[_type == "vision"]';
    const galleryquery = '*[_type == "gallery"]';
    const productsquery = '*[_type == "products"]';
  
      client.fetch(whowearehomequery).then((data) => {
        setWhowearehome(data);
      });
      
      
      client.fetch(servicesquery).then((data) => {
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
    setServices(sortedData);
      });

      client.fetch(visionquery).then((data) => {
        setVision(data);
      });

      client.fetch(galleryquery).then((data) => {
        setGallery(data);
      });
      client.fetch(productsquery).then((data) => {
        setProducts(data);
      });


      const fetchContactData = async () => {
        try {
          const data = await client.fetch(`
            *[_type == "contact"][0] {
              location,
              phoneNumbers,
              emails
            }
          `);
          setContactData(data);
        } catch (error) {
          console.error('Error fetching contact data:', error);
        }
      };
  
      fetchContactData();
  
    }, []);
  

  return (

    <>
     
   
    <div className="left-0 top-0 w-full">

    <div className="header-bg2 bg-cover bg-no-repeat bg-center h-screen md:h-full bg-[#011d19a8] bg-blend-darken relative">
   
    <Particles
      id="tsparticles" className="h-full w-full absolute"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
            autoPlay: true,
            background: {
              color: {
                value: ""
              },
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "20%",
              opacity: 1
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#fff"
                },
                opacity: 1
              },
              enable: false
            },
            fullScreen: {
              enable: false,
              zIndex: 1
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse"
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle"
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10
                  }
                },
                resize: true
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1
                },
                bounce: {
                  distance: 200
                },
                bubble: {
                  distance: 250,
                  duration: 2,
                  mix: false,
                  opacity: 0,
                  size: 0,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: []
                  }
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5
                  },
                  radius: 60
                },
                grab: {
                  distance: 400,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1
                  }
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#ffffff"
                      },
                      stop: {
                        value: "#000000"
                      }
                    },
                    radius: 1000
                  },
                  shadow: {
                    color: {
                      value: "#000000"
                    },
                    length: 2000
                  }
                },
                push: {
                  default: true,
                  groups: [],
                  quantity: 4
                },
                remove: {
                  quantity: 2
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: []
                  }
                },
                slow: {
                  factor: 3,
                  radius: 200
                },
                trail: {
                  delay: 1,
                  pauseOnStop: false,
                  quantity: 1
                }
              }
            },
            manualParticles: [],
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: true
              }
            },
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1
                  },
                  value: 1
                }
              },
              collisions: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1
                    },
                    value: 1
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1
                    },
                    value: 1
                  }
                },
                enable: false,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0
                }
              },
              color: {
                value: "#ffffff",
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true
                  }
                }
              },
              destroy: {
                mode: "none",
                split: {
                  count: 1,
                  factor: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 3
                  },
                  rate: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: {
                      min: 4,
                      max: 9
                    }
                  },
                  sizeOffset: true
                }
              },
              gradient: [],
              groups: {},
              links: {
                blink: false,
                color: {
                  value: "#ffffff"
                },
                consent: false,
                distance: 150,
                enable: false,
                frequency: 1,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000"
                  },
                  enable: false
                },
                triangles: {
                  enable: false,
                  frequency: 1
                },
                width: 1,
                warp: false
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 600
                  }
                },
                center: {
                  x: 50,
                  y: 50,
                  radius: 0
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 0
                  },
                  enable: false,
                  options: {}
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out"
                },
                random: true,
                size: false,
                speed: 1,
                spin: {
                  acceleration: 0,
                  enable: false
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000"
                  }
                },
                vibrate: false,
                warp: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                  factor: 1000
                },
                limit: 0,
                value: 160
              },
              opacity: {
                random: {
                  enable: true,
                  minimumValue: 0.1
                },
                value: {
                  min: 0,
                  max: 1
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 1,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0
                }
              },
              reduceDuplicates: false,
              repulse: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1
              },
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  decay: 0,
                  sync: false
                },
                direction: "clockwise",
                path: false
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000"
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0
                }
              },
              shape: {
                options: {},
                type: "circle"
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 1
                },
                value: {
                  min: 1,
                  max: 3
                },
                animation: {
                  count: 0,
                  enable: false,
                  speed: 4,
                  decay: 0,
                  sync: false,
                  destroy: "none",
                  startValue: "random",
                  minimumValue: 0.3
                }
              },
              stroke: {
                width: 0
              },
              zIndex: {
                random: {
                  enable: false,
                  minimumValue: 0
                },
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1
              }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            style: {},
            themes: [],
            zLayers: 100
          }
      }
    />
   


    
    
    <div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] pt-[18vh] md:text-4xl lg:leading-[100px] leading-[50px] font-extrabold font-Poppins gradient__tnext text-white/90 content-center">Bringing Growth, <br className="md:hidden"/>Stability & Improving Agriculture</h1>
    
    <div className="border-b-white/60 border-b-[6px] lg:mx-[45%] w-[65px] mb-5 mt-6">

</div>
  <p className="text-white/90 py-5 font-normal md:text-xl leading-8 text-lg">Serving farmers on all scales by providing original, reliable and latest premium quality Agro inputs.</p>
    
  <div className="lg:content-center py-10">
{/* 
    <input className="bg-gray-200 bg-opacity-90 py-3 rounded-l-md rounded-r-none text-center lg:pl-5 lg:text-left text-sm md:w-2/5 w-[55%] text-gray-700" type="email" placeholder="Your Email Address" />
     */}
     <Link href="#productsmenu" className="scroll-smooth">
    <button href="#productsmenu" className="scroll-smooth py-5 pl-5 pr-10 mt-3 lg:mt-0 hover:bg-[#f1cf69] hover:text-green-900 text-gray-300 font-semibold border-[1px] border-[#f1cf6911] bg-green-800 rounded-full shadow-md hover:scale-105 ease-in duration-300" type="button">View Our Products  <span
            style={{ size:'45px' }}
            className=''
          >
             <span className="absolute mt-1 pl-[5px] hover:text-green-900">
            <TbArrowRight />
            </span>
            
                </span> </button>
                </Link>
  </div>
    
    </div>
    </div>
    
  </div>
  </div>
           
  <div className="sections bg-white bg-opacity-95">





           





           
  <div className="bg-slate-200 justify-center content-center text-center lg:h-screen md:shadow-gray-300 md:py-10 lg:py-0 px-0 lg:mx-auto lg:px-12 section-container1 pb-8 flex-col lg:flex lg:flex-row lg:flex-wrap">
        
        <div className="md:basis-3/4 md:px-16">
                  <div className="pr-5 pt-18 lg:pt-0">
      
                      <h1 className="text-green-700 font-[400] text-lg">
                          who we are
                      </h1>

                      {whowearehome.map((whoweare1, index) => (
<>
          
                    
                      <h1 className="text-gray-700 font-bold font-Averia leading-12 mb-1 text-[45px] lg:text-[55px] lg:mb-5 pb-1">
                          {whoweare1.name}
                      </h1>
                      <button>
                      <div className="border-b-green-600 border-b-[5px] w-[65px] my-4">
      
      </div>
      
      </button>
      <div className="md:basis-2/4">
                      {/* <p className="text-[#747474] font-[400] tracking-[0.015rem] text-[1.2rem] md:text-[1.25rem] pt-2 md:px-5 px-3 leading-[1.9rem] pb-18">
                      We supply a wide range of products, including <span style={{color:'green'}}> fertilizers</span>, insecticides, fungicides, herbicides, plant growth regulators, post harvest treatment <span style={{color:'green'}}> chemicals</span>, green house plastic, vegetable <span style={{color:'green'}}> seeds</span>, knapsack sprayers, irrigation systems and many other Agicultural services.
                We are Passionate about <span style={{color:'green'}}> Agriculture</span>, we Create Simplicity and we Get things done.
                </p> */}
                      <p className="text-[#747474] font-[400] tracking-[0.015rem] text-[1.2rem] md:text-[1.15rem] pt-2 md:px-5 px-3 leading-[1.9rem] pb-6">
                      {whoweare1.description}
                </p>
                <Link href="/about-us" className="scroll-smooth  pb-18">
    <button className="scroll-smooth py-4 pl-5 pr-10 mt-3 lg:mt-0 hover:bg-green-950 text-white font-semibold border-[1px] border-[#f1cf6911] bg-green-800 rounded-[2.5rem] shadow-md hover:scale-105 ease-in duration-300" type="button">Learn more  <span
            style={{ size:'45px' }}
            className=''
          >
             <span className="absolute mt-1 pl-[5px]">
            <TbArrowRight />
            </span>
            
                </span> </button>
                </Link>
                      </div>

                      </>
        ))}
                      </div>
      
                     
                      </div>
      
              </div>
    
  <div className="moving-bgcon">
  <div className="moving-bg bg-[#334b35] bg-blend-soft-light lg:h-screen items-center justify-center content-center lg:flex text-center">
  <div className="md:basis-full">
 
  

                      <h1 className="text-white relative font-bold font-Averia leading-12 py-20 px-3 lg:px-[150px] text-[45px] lg:text-[55px] lg:mb-5 pb-1">
                          Agriculture matters to the future of Development
                      </h1>
                      <p className="text-[#f1cf69] font-[300] font-Averia tracking-[0.015rem] text-[1.5rem] md:text-[2rem] pt-16 lg:px-[200px] lg:pb-20 px-8 leading-[2.5rem] pb-3">
                      Get our top quality products & services & get the best farming Experience with Us!
                      </p>
                       <Link href="#servo">
                      <button href="#productsmenu" className="rounded-xl py-5 pl-5 pr-10 my-20 lg:mt-0 bg-[#f1cf69] hover:bg-green-900 hover:text-white/80 text-[#263c28] font-semibold hover:scale-105 ease-in duration-300" type="button">DISCOVER MORE  <span
            style={{ size:'45px' }}
            className=''
          >
             <span className="absolute mt-1 pl-[5px]">
            <TbArrowRight />
            </span>
            
                </span> </button>
                </Link>
                   
            
    </div>
    </div>
    </div>


        <div id="productsmenu" className="productsection">



        

<div className="pb-10 md:pt-0 bg-[#334b35]">
    <div className="pt-12 justify-center text-center">
    
    <h1 className="text-[#b3c5b5] font-[400] text-lg">
                    Looking for best quality? See
                </h1>
           
                <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-5 pb-1">
                    Our Farm Products
                </h1>
                <button>
                <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-4">

</div>

</button>
                
  
    </div>
            <div className="font-light px-4 md:container md:px-12 lg:px-16 md:gap-6 md:lg-10 grid lg:grid-cols-3 grid-cols-1 gap-y-[17px] 2xl:gap-3 justify-items-center">
                
                
              
                 {products.map((product, index) => (

                <div key={index} className="bg-[#263c28] mt-5 lg:mx-0 text-white/90 text-center rounded-[15px] shadow-sm shaddow-[#b3c5b5]">
              
                   <img src={urlFor(product.imgUrl)}
                                       alt='/'
                                       width='900px'
                                       className='rounded-tr-[12px] object-cover h-[250px] rounded-tl-[12px] relative'
                                       />

                  <button><div
            style={{ size:'45px', color:'#f1cf69' }}
            className='text-center justify-center rotator-ef'
          >
             <div className="bg-[#263c28] shadow-md border-gray-400 p-4 rounded-full relative -mt-16 content-center justify-center">
            <img src={urlFor(product.icon)}/>
            </div>
            
                </div>
                </button>
                <div className="lg:ml-5 py-3 px-8 ">
                

                    <h3 className="font-extrabold text-2xl py-4">{product.title}</h3>
                    <p className="leading-8 font-light">
                    {product.description}
                     </p>

                   <Link href={`/${product.slug}`}>
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
                      ))}
                

                  
                    {/*  */}

{/* 
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
                    </div> */}

                    {/*  */}

                    
{/* 
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
                    </div> */}

                    
                    {/*  */}
              
           
                    
                        </div>
                        </div>

{/* </ScrollAnimation> */}

     {/* preoductend */}


 {/* Gallery start */}

     <div className="pb-2 md:pt-0 bg-[#263c28]">
    <div className="pt-20 justify-center text-center">
    
    <h1 className="text-[#b3c5b5] font-[400] text-lg">
                    For your eyes only
                </h1>
           
                <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-5 pb-1">
                    Our Products Gallery
                </h1>
                <button>
                <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-10">

</div>

</button>
                
  
    </div>

    <div className="font-light px-4 md:container md:mx-auto md:lg-10 justify-items-center">
            
     <div className="slider rounded-lg">
    
      <div className="slides">


      {gallery.map((gal, index) => (
      <div key={index} id="slide-1">
      <img src={urlFor(gal.imgUrl)} alt={gal.title}
                  
                  width="350px"
                  className=
                  'text-center h-[400px] justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
               
                   />

<span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-5 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className="">{gal.title}</span>
      </span>
        </div>
      
      ))}

      

        {/* <div id="slide-1">
          <Image
          alt=""
          src={corn}
          layout=""
          objectFit=""
          height="400px"
          width="350px"
          className=
            'text-center justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
         <span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-5 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className="">Corn Fertilizer</span>
      </span>
        </div>



        <div id="slide-1">
          <Image
          alt=""
          src={fertilizer}
          layout=""
          objectFit=""
          height="400px"
          width="350px"
          className=
            'text-center justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
         <span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-4 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className="">Compost Manure</span>
      </span>
        </div>
        <div id="slide-1">
          <Image
          alt=""
          src={abstract}
          layout=""
          objectFit=""
          height="400px"
          width="350px"
          className=
            'text-center justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
         <span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-4 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className=""> Chemical Machine</span>
      </span>
        </div>
        <div id="slide-1">
          <Image
          alt=""
          src={seeds}
          layout=""
          objectFit=""
          height="400px"
          width="350px"
          className=
            'text-center justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
         <span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-4 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className=""> Farm Seeds</span>
      </span>
        </div>
        <div id="slide-1">
          <Image
          alt=""
          src={fertilizers}
          layout=""
          objectFit=""
          height="400px"
          width="350px"
          className=
            'text-center justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
         <span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-4 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className=""> Chemical Products</span>
      </span>
        </div>
        <div id="slide-1">
          <Image
          alt=""
          src={seedlings}
          layout=""
          objectFit=""
          height="400px"
          width="350px"
          className=
            'text-center justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
         <span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-4 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className=""> Special Seeds</span>
      </span>
        </div>
        <div id="slide-1">
          <Image
          alt=""
          src={tractor}
          layout=""
          objectFit=""
          height="400px"
          width="350px"
          className=
            'text-center justify-center content-center object-cover relative object-center rounded-lg duration-700 ease-in-out group-hover:opacity-75 scale-100 blur-0 grayscale-0'
          
        />
         <span className="text-white/70 font-[500] text-lg absolute mt-[350px] bg-[#263c28] text-center justify-center content-center w-[60%] px-4 ml-[66px] py-[11px] rounded-tr-xl rounded-tl-xl">
        <span className=""> Tractors</span>
      </span>
        </div> */}
        

        
        
      </div>
    </div>

    </div>


    <div className="justify-center content-center text-center">
    <Link href="../gallery">
  <button href="#productsmenu" className="rounded-full text-center py-5 pl-5 pr-10 mt-10 hover:bg-[#f1cf6975] hover:text-white/80 mb-20 bg-[#f1cf69] text-[#263c28] font-semibold hover:scale-105 ease-in duration-300" type="button">VISIT GALLERY  <span
            style={{ size:'45px' }}
            className=''
          >
             <span className="absolute mt-1 pl-[5px]">
            <TbArrowRight />
            </span>
            
                </span> </button>
                </Link>
                </div>


    </div>
     {/* </ScrollAnimation> */}




<div id="servo" className='flex justify-center w-full bg-[#6d8c54]'>

  

   



     <div className="bg-[#6d8c54] lg:container lg:mx-auto section-container1 flex-col lg:flex lg:flex-row lg:flex-wrap">
            
            
            
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
            className='rotator-ef2'
          >
             <div className="bg-[#263c28] p-5 rounded-full md:absolute">
             <img src={urlFor(service.imgUrl)} alt={service.title} />
            </div>
            
                </div>
                </button>
                <div className="md:relative md:pl-[140px] md:-top-2">
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
                    {/*  */}





                

            </div>
            
            <div className="md:basis-2/4 md:mx-auto px-4 md:px-[120px] lg:px-20 pt-5 pb-12 justify-center text-center lg:text-left content-center bg-green-800 lg:bg-transparent">
           
            {vision.map((vis, index) => (
              <>
            <div key={index} className="pt-12">
    
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

<p className="leading-9 mt-8 font-light px-2 md:px-0 text-[18px] text-[#dbe6d2]">

                  {vis.description}

                     </p>
                     </>
))}
            
            </div>
      

        </div>

                    {/* </ScrollAnimation> */}
                    </div>

                {/* services end */}



                {/* clients start */}
   

          <Clients/>



          {/* clients end */}



                <div className="bg-[#f1cf69] content-center text-center justify-center">
            
  

                <div className="pt-16 justify-center text-center block">
    
    <h1 className="text-black/50 font-[400] text-lg">
                    We are a message away
                </h1>
           
                <h1 className="text-[#334b35] font-bold mb-1 px-5 text-[32px] lg:text-[40px] pb-1">
                    Send Us a Message
                </h1>
                <button>
                <div className="border-b-black/60 border-b-[5px] w-[65px]">

</div>

</button>
</div>
<div className="lg:mx-auto section-container1 flex-col lg:flex lg:flex-row lg:flex-wrap">
                 
     <div className="md:container justify-items-center md:mx-auto mx-4 pb-10 lg:flex md:px-10 lg:flex-row">

        <div className="lg:basis-2/4 lg:text-left lg:text-2xl px-3 lg:px-10 font-Averia text-[#334b35]">
                   
                <p className="text-[#334b35] px-2 lg:px-0 pt-8 lg:pt-20 lg:text-left pb-5">
                Do you have any questions, enquiries or concerns? Get in touch with us by writing us a message, and we will give you the assistance, help & support you need.
                </p>
               <div className="hidden lg:contents"> <h1 className="font-medium text-black/80 pb-1">
                  Our Location:
                </h1>
<p>

{contactData.location && (
<>
<span>{contactData.location.locale}</span>
</>

)}

</p>

<h1 className="font-medium text-black/80 pt-5 pb-1">
                  Phone:
                </h1>
                <p className='flex flex-col space-y-1'>
{contactData.phoneNumbers.map((phoneNumber, index) => ( 
<>
<span key={index}>{phoneNumber.number}</span>
</>

))}    
</p>


<h1 className="font-medium text-black/80 pt-5 pb-1">
                  Email:
                </h1>

                <p className='flex flex-col space-y-1'>
            {contactData.emails.map((email, index) => ( 
<>
<span key={index}>{email.address}</span>
</>

))}  
            </p>


                </div>
            


                    {/*  */}
               
                     

                </div>


                <div className="lg:basis-2/4 lg:pt-20 lg:mt-0">   
                   
                
                
                <ContactForm/>
                
                
                </div>
                </div>
                </div>
                </div>
          

                


    </div>

  </div>

  


  </>
                

      
  )
}

export default HomeInfos