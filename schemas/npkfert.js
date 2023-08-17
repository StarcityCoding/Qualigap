export default{
    name:'npkFertilizer',
    title:'NPK Fertilizer',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Name',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}