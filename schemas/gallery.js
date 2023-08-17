export default{
    name:'gallery',
    title:'Images Gallery',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Product Name',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'Product Image(Image format must be jpeg,jpg,png or webp)',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}