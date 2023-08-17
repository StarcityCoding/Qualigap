export default{
    name:'seedlings',
    title:'Seedling Products',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Seed Name',
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