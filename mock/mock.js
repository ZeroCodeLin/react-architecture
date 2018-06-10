const router = require('koa-router')();
var Mock = require('mockjs')

router.get('/list', async (ctx, next) => {
    ctx.body = Mock.mock( {
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
        }],
        'name' : '@Name'

    })
})

router.get('/page1', async (ctx, next) => {
    ctx.body = Mock.mock({
        data: [
            {
                "id": 1,
                "title": "科学搬砖组",
                "description": '那是一种内在的东西，他们到达不了，也无法触及的',
            },
            {
                "id": 2,
                "title": "程序员日常",
                "description": '那时候我只会想自己想要什么，从不想自己拥有什么',
            },
            {
                "id": 3,
                "title": "骗你来学计算机",
                "description": '生命就像一盒巧克力，结果往往出人意料',
            },
            {
                "id": 4,
                "title": "全组都是吴彦祖",
                "description": '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            },
        ],
        status: 200,
    })
})

router.get('/page2', async (ctx, next) => {
    ctx.body = Mock.mock({
        "data|1-10":[{
            'id|+1': 1,
            'number|1-100': 10.0
        }]
    })
})

router.get('/page3', async (ctx, next) => {
    ctx.body = Mock.mock({
        "data|1-10":[{
            'id|+1': 1,
            'email': '@email',
            'name' : '@Name'
        }]
    })
})

module.exports = router