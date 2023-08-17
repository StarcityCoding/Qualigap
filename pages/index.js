import { PostCard, Categories, PostWidget, HomeInfos, Footer } from '../components';
import { client, urlFor } from '../pages/api/client';
import { TbArrowRight } from "react-icons/tb";
import Link from 'next/link';
import Head from 'next/head'
import moment from 'moment';

import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";


export default function Home({ blogPosts }) {
  
  return (
     <>
     <Head>
        <title>The Best Agro One-Stop Shop | Qualigap.com</title>
      </Head>
     <HomeInfos/>
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

    
  <div className="justify-center content-center text-center">
    <Link href="../blog">
  <button href="#productsmenu" className="rounded-full text-center py-5 pl-5 pr-10 mt-10 hover:bg-[#263c28] hover:text-white/80 mb-20 bg-[#f1cf69] text-[#263c28] font-semibold hover:scale-105 ease-in duration-300" type="button">VISIT OUR BLOG  <span
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
  
    </>
  );
}

// Fetch data at build time


export async function getStaticProps() {
  const query = `
    *[_type == "blog"] | order(publishedAt desc) [0..2] {
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

