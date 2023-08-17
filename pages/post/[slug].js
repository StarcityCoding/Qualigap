import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { client } from '../api/client';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';

import Head from 'next/head';

import BlogPost from '../../components/BlogPost';
import RelatedPost from '../../components/RelatedPosts';



const PostDetails = ({ post, relatedPosts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
                <Head>
        <title>{post.title}</title>
      </Head>
    <div className="w-full">

<div className="header-bg1 bg-cover bg-no-repeat bg-center bg-[#08011DA8] bg-blend-darken relative">

<div className=" pl-6 pr-8 pb-6 relative flex lg:justify-center lg:text-center">
    <div className="static lg:basis-2/3 md:basis-3/4 md:mt-5">
    <h1 className="text-3xl lg:text-7xl md:leading-[70px] 
    pt-[15vh] md:text-4xl lg:leading-[100px] leading-[50px] 
    font-extrabold font-Poppins gradient__tnext text-white/90 
    content-center">{post.title}</h1>
    <button className="pl-2">
    <div className="border-b-white/60 border-b-[6px] w-[65px] mb-5 mt-6">

</div>
</button>
    
    </div>
    </div>
    </div>


      <div className="bg-[#334b35] lg:pb-10 lg:px-16">
      <div className="lg:container lg:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
          <div className="md:px-10 lg:px-0">
          <Link href="./">
         <div className="lg:mt-16 mt-10 flex text-lg pl-4 text-[#f1cf69] cursor-pointer pt-2 pb-4">
         <span className="text-[#f1cf69]">
            <IoIosArrowRoundBack size={30} />
            </span>
          Back to blog
         </div>
      </Link>
          <div className="py-5 rounded-xl pb-4 md:px-8 lg:px-0 mb-8 bg-[#2d442f]">
          <BlogPost post={post} />
            {/* <Comments slug={post.slug} />
            <CommentsForm slug={post.slug} /> */}
          </div>
          </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky lg:pt-28 -top-[14px]">
            <div className="bg-[#2d442f] rounded-lg md:mx-10 lg:mx-0">
            <div className="p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 text-white/90 font-semibold border-b border-b-white/20 pb-4">Related Posts</h3>
   
        {relatedPosts.map((relatedPost) => (
          <RelatedPost
            key={relatedPost._id}
            title={relatedPost.title}
            mainImage={relatedPost.mainImage}
            excerpt={relatedPost.excerpt}
            slug={relatedPost.slug.current}
          />
        ))}
      </div>
              {/* <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} /> */}
              </div>
              <div className="bg-[#2d442f] rounded-lg md:mx-10 lg:mx-0 mb-4">
              {/* <Categories /> */}
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    mainImage,
    excerpt,
    body,
    author->{
      name,
      bio,
      authorImage
    },
    categories[]->{
      name
    }
  }`;
  const post = await client.fetch(query, { slug });


  const postId = post._id;

  // Fetch related posts using a similar query and logic
  const relatedPostsQuery = `*[_type == "blog" && _id != $postId] | order(publishedAt desc) [0..3]{
    _id,
    title,
    publisedAt,
    slug,
    mainImage,
    excerpt
  }`;
  const relatedPosts = await client.fetch(relatedPostsQuery, { postId });

  
  return {
    props: {
      post,
      relatedPosts,
    },
  };
}



