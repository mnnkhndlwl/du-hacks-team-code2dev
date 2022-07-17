export default{
    name:'jee',
    title:'Jee',
    type: 'document',
    fields:[
        {
            name:'subject',
            title:'Title',
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