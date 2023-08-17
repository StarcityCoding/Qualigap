export default{
    name:'chemicals',
    title:'Agro-Chemical Products',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Chemical Name',
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