[Click on the Readme in English](./README.md)

## Excel Read
### 说明
这个模块可以转换Excel文件

有两种返回语言 中文和英文

配置中文方法：前往主目录下的 config/index.js 文件 设置 ”lang“属性为”cn“即可

配置英文方法：前往主目录下的 config/index.js 文件 设置 ”lang“属性为”en“即可

配置api端口方法：前往主目录下的 config/index.js 文件 设置 ”port“属性为 [端口号] 即可

配置上传文件大小方法：前往主目录下的 config/index.js 文件 设置 ”fileSize“属性为 [文件大小] 即可

### 安装
使用 “npm install” 命令进行安装
### 使用
使用 “npm start” 命令来开启工具，然后就可以通过请求api来进行转换
### 拥有的API
*/excel/convert*

**请求方法:"POST"**

**请求头:**

> Content-Type:multipart/form-data;boundary=----ExcelKit
>
> ------ExcelKit
>
> Content-Disposition:form-data;name="excel";filename=[文件]
>
> < [文件]
>
> ------Excelkit--

**说明**
这个“name”属性必须为excel，不然会报错

## 作者说明

如果有问题，请通过邮箱联系我或在question上留言