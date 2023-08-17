export default{
    name:'vision',
    title:'Our Vision',
    type: 'document',
    fields:[
        {
            name:'description',
            title:'Our Vision Content',
            type:'text'
        },
        {
            name:'imgUrl',
            title:'Vision Image Placeholder',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}