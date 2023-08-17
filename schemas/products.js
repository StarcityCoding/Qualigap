export default{
    name:'products',
    title:'Our Products | HomePage Display',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Product Title',
            type:'string'
        },
        {
            name:'description',
            title:'Product Description',
            type:'text'
        },
        {
            name:'slug',
            title:'Product Page Link',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'Product Image (Kindly upload svg or png images for best output)',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'icon',
            title:'Rotating Icon Image (Kindly upload svg or png images for best output)',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}