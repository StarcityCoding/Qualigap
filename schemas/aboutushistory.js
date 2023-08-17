export default{

    name: 'ourhistory',
    title: 'Our History',
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
  