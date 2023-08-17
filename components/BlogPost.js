// components/BlogPost.js
import React from 'react';
import { urlFor } from '../pages/api/client';
import { PortableText } from '@portabletext/react';
import { sanityCMSImageLoader } from '../util';
import { FaRegUserCircle } from "react-icons/fa";

import moment from 'moment';
import { MdDateRange } from 'react-icons/md';
import Image from 'next/image';

function BlogPost({ post }) {
  return (

    <>
    


    <div className="hidden text-lg pl-6 text-[#b3c5b5] pb-6 font-bold">
     
    Agro News Today
    </div>
          <button className="hidden pl-6 py-6">
  <div className="border-b-white/60 border-b-[6px] w-[65px]">

</div>
</button>
      <div className="relative overflow-hidden mb-3 px-3">
      {post.mainImage && (
        <img
        src={urlFor(post.mainImage)} 
          alt={post.title}
          className='lg:h-[500px] h-[280px] w-full object-center object-cover rounded-t-lg'
        />
      )}
         </div>
      <div className="flex items-center w-full text-[#b3c5b5]">
          
        
        <div className="flex px-6 ustify-center lg:mb-0 lg:w-auto items-center">
        <span className="text-[#f1cf69]">
          <FaRegUserCircle size={20} />
          </span>
            <p className="inline align-middle ml-2 font-medium text-lg">{post.author.name}</p>
          </div>
          <div className="flex justify-center lg:mb-0 lg:w-auto mr-8 items-center font-medium">
          <span className="text-[#f1cf69] pr-2">
          <MdDateRange size={20} />
          </span>
            <p className="inline align-middle">{moment(post.publishedAt).format('MMM DD, YYYY')}</p>
          </div>
          
          </div>
          
          
  <div className="border-b-white/40 border-b-[1px] mx-2 pt-2">

</div>
      <div className="px-5 text-white/90 text-lg font-light pt-8 portable">
        
      <PortableText value={post.body} />
      </div>

            
  <div className="border-b-white/40 border-b-[1px] mx-2 pt-2">

</div>
<div className="text-center flex flex-col items-center justify-center mx-3 mt-20 py-12 lg:p-12 px-6 relative rounded-lg bg-black bg-opacity-20">
  <div className="absolute -top-12">


  {post.author.authorImage && (
            <img
            src={urlFor(post.author.authorImage)} 
            alt={post.author.name}
            height={100}
            width={100}
            className="align-middle rounded-full h-[100px]"
              />
          )}

  </div>
  <h3 className="text-white mt-4 mb-4 text-xl font-bold">{post.author.name}</h3>
  <div className="text-white text-ls">   <PortableText value={post.author.bio} className="" /></div>
</div>
  
    
  </>

  );
}

export default BlogPost;
