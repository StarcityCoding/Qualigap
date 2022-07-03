import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, HomeInfos, Footer } from '../components';
import { getPosts } from '../services';
import { TbArrowRight } from "react-icons/tb";
import Link from 'next/link';


export default function Home({ posts }) {
  
  return (
     <>
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
      

          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
  

    </div>

    
  <div className="justify-center content-center text-center">
    <Link href="../blog">
  <button href="#productsmenu" className="rounded-full text-center py-5 pl-5 pr-10 mt-10 hover:bg-[#263c28] hover:text-white/80 mb-20 bg-[#f1cf69] text-[#263c28] font-semibold hover:scale-105 ease-in duration-300" type="button">VISIT OUR BLOG  <span
            style={{ color: '', size:'45px' }}
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
  const posts = (await getPosts()).slice(-3) || [];
  posts.sort((a, b) => a.position > b.position ? 1 : -1 );
  return {
    props: { posts },
  };
  
  
}


