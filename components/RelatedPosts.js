// components/BlogPost.js
import React from 'react';
import { urlFor } from '../pages/api/client';
import { PortableText } from '@portabletext/react';
import { sanityCMSImageLoader } from '../util';
import { FaRegUserCircle } from "react-icons/fa";

import moment from 'moment';
import { MdDateRange } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

function RelatedPost ({ _id, title, mainImage, publishedAt, slug }) {
  return (

    <>
 
        <div key={_id} className="flex items-center w-full mb-4 text-white/70 border-b border-b-white/5 pb-4">
          <div className="w-16 flex-none">
            <img
              alt={title}
              height={60}
              width={60}
              className="align-middle rounded-full h-[60px] object-cover"
              src={urlFor(mainImage)} 
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-white/40 font-xs">
                
                {moment(publishedAt).format('MMM DD, YYYY')}
                </p>
           
            <Link href={`/post/${slug}`} className="text-md"> {title}</Link>
          </div>
        </div>
   
 

  </>

  );
}

export default RelatedPost;
