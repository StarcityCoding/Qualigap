import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({ post, position }) => (
  <>
     
    <Link href={`/post/${post.slug}`}><span className="z-10 cursor-pointer absolute w-full h-full" /></Link>
    {position === 'LEFT' && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 left-4 rounded-full">
        NEXT ARTICLE
      </div>
    )}
    {position === 'RIGHT' && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 right-4 rounded-full">
        PREVIOUS ARTICLE
      </div>
    )}
  </>
);

export default AdjacentPostCard;
