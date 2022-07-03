import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";



import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (

  
   <div className="bg-[#263c28] mt-5 lg:mr-6 text-white/90 text-center rounded-[15px] shadow-lg shaddow-[#b3c5b5]">
              
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
       <Link href={`/post/${post.slug}`}><Image src={post.featuredImage.url} alt="" height="" width="" className="cursor-pointer object-cover rounded-tr-[12px] rounded-tl-[12px] relative h-[280px] w-[900px]" />
       </Link>
      <div className="text-[#263c28] font-[500] text-sm absolute -mt-[30px] bg-[#f1cf69] px-5 py-[5px] mx-10 rounded-tr-lg rounded-tl-lg">
        <span className="">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
       
       <div className="justify-start content-start text-left">
      <div className="text-[#b3c5b5] pl-10 font-[500] pt-5 pb-4 inline-flex">
           
      <span className="text-[#f1cf69]">
            <FaRegUserCircle size={18} />
            </span>
            
              <span className="pl-1"> {post.author.name} </span> <span className="text-[#f1cf69] pl-4">
            <MdOutlineCategory size={18} />
            </span>
    <span className="pl-1">  Agro News</span>
  </div>

    <h1 className="transition duration-700 mb-8 pl-10 pr-6 cursor-pointer hover:text-[#f1cf69] text-2xl leading-9 font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    </div>

    
      
  </div>
  
);

export default PostCard;
