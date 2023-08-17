export default{
    name:'services',
    title:'Our Services',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Service Title',
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