export default{
    name:'socials',
    title:'Social Media Links',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Social Media Name',
            type:'string'
        },
        {
            name:'link',
            title:'Profile Link (Starts with https://)',
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