/**
 * @author AEdgeJay
 * @module excel
 * @returns []
 */
let fs = require("fs")
let xlsx = require('node-xlsx')
let config = require('../config/index')
let lang;
if(config.lang === "cn"){
    lang = require('../language/cn.json')
}else{
    lang = require('../language/en.json')
}
let api = {
    async excel(ctx){
        const file = ctx.request.files.excel
        if(file){
            let Obj = {}
            let xlsxContent = xlsx.parse(fs.readFileSync(file.path))
            xlsxContent.map((Xlsx,x)=>{
                let name = Xlsx.name
                let content = Xlsx.data
                let list = []
                let title = content.splice(0,1)[0]
                content.map((item,i)=>{
                    let itemObject = {}
                    for(var a=0;a<title.length;a++){
                        itemObject[title[a]] = item[a]
                    }
                    list.push(itemObject)
                })
                Obj[name] = list
            })
            fs.rmSync(file.path)
            ctx.body = {"code":200,"msg":lang.convertSuccess,"data":Obj}
            ctx.status = 200
        }else{
            ctx.body = {"code":500,"msg":lang.convertError}
            ctx.status = 500
        }
    }
}
module.exports = api