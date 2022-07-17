export default{
    name:'neet',
    title:'Neet',
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