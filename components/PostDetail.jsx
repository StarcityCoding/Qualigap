import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaRegUserCircle } from "react-icons/fa";

import moment from 'moment';
import { MdDateRange } from 'react-icons/md';

import { grpahCMSImageLoader } from '../util';


const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

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
          <img src={post.featuredImage.url} alt="" className="lg:h-[500px] h-[280px] w-full object-center object-cover rounded-t-lg" />
        </div>
        <div className="flex items-center w-full text-[#b3c5b5]">
            
          
          <div className="flex px-6 ustify-center lg:mb-0 lg:w-auto items-center lg:pt-3">
          <span className="text-[#f1cf69]">
            <FaRegUserCircle size={20} />
            </span>
              <p className="inline align-middle ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="flex justify-center lg:mb-0 lg:w-auto mr-8 items-center font-medium">
            <span className="text-[#f1cf69] pr-2">
            <MdDateRange size={20} />
            </span>
              <p className="inline align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            </div>
            
            </div>
            
            
    <div className="border-b-white/40 border-b-[1px] mx-2 pt-2">

</div>
        <div className="px-5 text-white/90 text-lg font-light pt-8">
          
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>

              
    <div className="border-b-white/40 border-b-[1px] mx-2 pt-2">

</div>
<div className="text-center mx-3 mt-20 py-12 lg:p-12 px-6 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={post.author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{post.author.name}</h3>
    <p className="text-white text-ls">{post.author.bio}</p>
  </div>
    
      
    </>
  );
};

export default PostDetail;
