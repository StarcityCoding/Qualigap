export default{
    name:'partners',
    title:'Partners and Clients',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Partner/Client Name',
            type:'string'
        },
        {
            name:'link',
            title:'Partner/Client Link (Starts with https://)',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'Upload Partner/Client Logo/Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}