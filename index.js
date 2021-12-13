/**
 * @module excelRead
 * @author AEdgeJay
 * @callback /excel/convert
 */
const koa = require("koa")
const koaBody = require("koa-body")
const route = require("koa-route")
const api = require("./api")
let config = require('./config/index')
const app = new koa()
let lang;
if(config.lang === "cn"){
    lang = require('./language/cn.json')
}else{
    lang = require('./language/en.json')
}
app.use(koaBody({
    multipart:true,
    formiable:{
        maxFileSize:config.fileSize*100*1024*1024
    }
}))
app.use(route.post("/excel/convert",api.excel))
app.listen(config.port)
console.log(lang.serverStart+"http://localhost:"+config.port)