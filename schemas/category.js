export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) => Rule.required(),
      },
      // Add more fields as needed
    ],
  };