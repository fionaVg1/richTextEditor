const { Random } = require('mockjs')
var Mock = require('mockjs')
var data = Mock.Mock({
    'type':'document',
    'paragraphs':[
        {
            'id|+1':1,
            'type':'paragraph',
            'segments|1-10':[
                {
                    'id|+1':1,
                    'text':'@string',
                    'style':{
                        'fontWeight':'bold',
                        'color':Random.color()
                    }

                }
            ],
            'style':{
                'textAlign':'center'
            }
        }        
    ]
})
export function getDocument(){
    return data;
}