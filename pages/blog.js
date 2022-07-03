import Image from 'next/image';
import { PostCard } from '../components';
import { getPosts } from '../services';
import { TbArrowRight } from "react-icons/tb";



export default function OurBlog({ posts }){
    return(
      <>
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
      

          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
  

    </div>

    
  <div className="pb-10 justify-center content-center text-center">
 
                </div>
    </div>



    
    
  </div>


</>
    )
}


// Fetch data at build time
export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    posts.sort((a, b) => a.position > b.position ? 1 : -1 );
    return {
      props: { posts },
    };
    
  }
  