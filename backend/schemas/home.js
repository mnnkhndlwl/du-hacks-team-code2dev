export default{
    name:'home',
    title:'Home',
    type: 'document',
    fields:[
        {
            name:'field',
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