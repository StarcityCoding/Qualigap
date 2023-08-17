export default{
    name:'ourvalues',
    title:'Our Values',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Value Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'text'
        },
        {
            name:'imgUrl',
            title:'Image(Kindly upload svg or png images for best output)',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}