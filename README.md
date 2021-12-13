[点击查看中文版README](./README-cn.md)

## Excel Read
### Explain
This module is designed to convert Excel files.

There are two return languages Chinese and English

Chinese method: Go to the config/index.js file in the home directory and set "lang" property to "cn"

English method: Go to the config/index.js file in the home directory and set "lang" to "en"

To configure the API port, go to the config/index.js file in the home directory and set port to [port number]

Set fileSize to [fileSize] in the config/index.js file in the home directory

### Install
Use 'npm install' for the installation.
### Used
Use 'npm start' to start the tool,
then you just need to request the API.
### API
*/excel/convert*

**method:"POST"**

**Headers:**

> Content-Type:multipart/form-data;boundary=----ExcelKit
>
> ------ExcelKit
>
> Content-Disposition:form-data;name="excel";filename=[file]
>
> < [file]
>
> ------Excelkit--

**Notice**

The name attribute must be "excel" or an error will be reported.

## Author Say

If you have any questions, please contact me by email or leave a message on Question.