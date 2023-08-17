export default{

    name: 'aboutus',
    title: 'About Us Page',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Content',
        type: 'array',
        of: [
            {
              type: 'block'
            }
          ]
      }
    ],
  }
  