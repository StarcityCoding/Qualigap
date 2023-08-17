import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import createImageUrlBuilder from '@sanity/image-url'

export const client =createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-04-04',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_PROJECT_TOKEN,

});


export const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max')

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


