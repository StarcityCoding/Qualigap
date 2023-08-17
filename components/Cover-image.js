import cn from 'classnames'
import Link from 'next/link'
import { urlFor, urlForImage } from '../pages/api/client'

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
      width={1240}
      height={540}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
      src={urlFor(imageObject).width(1240).height(540)}
  
    />
  )

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link aria-label={title} as={`/posts/${slug}`} href="/posts/[slug]">
       {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
