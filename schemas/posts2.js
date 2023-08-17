// schemas/blog.js
export default {
    name: 'blog',
    type: 'document',
    title: 'News & Information Posts/Articles',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 200,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'author',
        type: 'reference',
        title: 'Author',
        to: [{ type: 'author' }], // Reference to the 'author' schema
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'categories',
        type: 'array',
        title: 'Categories',
        of: [{ type: 'reference', to: [{ type: 'category' }] }], // Reference to the 'category' schema
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published At',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'mainImage',
        type: 'image',
        title: 'Main Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'excerpt',
        type: 'text',
        title: 'Excerpt',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'body',
        type: 'blockContent',
        title: 'Body',
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
        select: {
          title: 'title',
          author: 'author.name',
          media: 'mainImage',
        },
        prepare(selection) {
          const { author } = selection
          return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
          })
        },
      },
  };
  