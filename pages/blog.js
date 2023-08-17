import Image from 'next/image';
import { TbArrowRight } from "react-icons/tb";
import Head from 'next/head'
import { client, urlFor } from '../pages/api/client';
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import moment from 'moment';


export default function OurBlog({ blogPosts }){
    return(
      <>
            <Head>
        <title>Our Blog | Qualigap.com</title>
      </Head>
       <div className="left-0 top-0 w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">


<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">Agro News & Info</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>



    <div className="newsoverlay pb-10 md:pt-0 bg-[#334b35] bg-blend-overlay">
     <div className="pt-14 justify-center text-center">
    
    <h1 className="text-[#b3c5b5] font-[400] text-lg">
                    From our Blog
                </h1>
           
                <h1 className="text-white font-bold mb-1 text-[30px] px-3 lg:text-[40px] lg:mb-5 pb-1">
                    News & Articles
                </h1>
                <button>
                <div className="border-b-[#b3c5b5] border-b-[5px] w-[65px] mb-4">

</div>

</button>
                
  
    </div>
     <div className="font-light px-4 lg:container md:px-24  lg:mx-auto md:lg-10 grid lg:grid-cols-3 grid-cols-1 gap-y-[17px] 2xl:gap-3">
      

     {blogPosts.map((post, index) => (

   <div key={index} className="bg-[#263c28] mt-5 lg:mr-6 text-white/90 text-center rounded-[15px] shadow-lg shaddow-[#b3c5b5]">
  
     <Link href={`/post/${post.slug.current}`}>
      

          {post.mainImage && (
            <img
            src={urlFor(post.mainImage)} 
            alt={post.title}
            className="cursor-pointer object-cover rounded-tr-[12px] rounded-tl-[12px] relative h-[250px] w-[900px]"
            />
          )}
                <div className="text-[#263c28] font-[500] text-sm absolute -mt-[30px] bg-[#f1cf69] px-5 py-[5px] mx-10 rounded-tr-lg rounded-tl-lg">
        <span className="">{moment(post.publishedAt).format('MMM DD, YYYY')}</span>
      </div>

      <div className="justify-start content-start text-left">
      <div className="text-[#b3c5b5] pl-10 font-[500] pt-5 pb-4 inline-flex">
           
      <span className="text-[#f1cf69]">
            <FaRegUserCircle size={18} />
            </span>
            
              <span className="pl-1"> {post.author.name} </span> <span className="text-[#f1cf69] pl-4">
            <MdOutlineCategory size={18} />
            </span>
    <span className="pl-1">  {post.categories.map((category) => category.name).join(', ')}</span>
  </div>

    <h1 className="transition duration-700 mb-8 pl-10 pr-6 cursor-pointer hover:text-[#f1cf69] text-2xl leading-9 font-semibold">
    {post.title}
    </h1>
    </div>



        
            </Link>
            </div>
      ))}
  

    </div>

    
  <div className="pb-10 justify-center content-center text-center">
 
                </div>
    </div>



    
    
  </div>


</>
    )
}


export async function getStaticProps() {
    const query = `
      *[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        excerpt,
        publishedAt,
        author->{
          name
        },
        categories[]->{
          name
        }
      }
    `;
    const blogPosts = await client.fetch(query);
  
    return {
      props: {
        blogPosts,
      },
    };
  }
  