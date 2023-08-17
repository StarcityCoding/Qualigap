export default{
    name: 'contact',
    title: 'Contact Us',
    type: 'document',
    fields: [
      {
        name: 'location',
        title: 'Office Address',
        type: 'document',
        fields: [
          {
                name:'locale',
                title:'Office Location Address',
                type:'string'
          },
        ],
      },
      {
        name: 'phoneNumbers',
        title: 'Phone Numbers',
        type: 'array',
        of: [
          {

            type: 'object',
            fields: [
              {
                name: 'number',
                title: 'Number',
                type: 'string',
              },
            ],
          },
        ],
      },
      {
        name: 'emails',
        title: 'Emails',
        type: 'array',
        of: [
          {

            type: 'object',
            fields: [
              {
                name: 'address',
                title: 'Email Address',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  }
  