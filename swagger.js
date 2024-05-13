const swaggerAutogen = require('swagger-autogen')();

const doc = {
    openapi: "2.0.0",
    info: {
        "title": "TODOLIST",
        "version": "1.0.0",
        "description": "六角學院 Week5-6周小組任務API。"
    },
    host: "",                         // by default: "localhost:3000"
    basePath: "",                     // by default: "/"
    schemes: [],                      // by default: ['http']
    consumes: [],                     // by default: ['application/json']
    produces: [],                     // by default: ['application/json']
    tags: [ // by default: empty Array        
        {
            name: "使用者登入驗證",
            description: "users"
        },
        {
            name: "待辦事項",
            description: "todos"
        },
    ],
    securityDefinitions: {},         // by default: empty object
    definitions: {
    }                  // by default: empty object
}

const outputFile = './swagger_output.json'; // 輸出的文件名稱
const endpointsFiles = ['./app.js']; // 要指向的 API，通常使用 Express 直接指向到 app.js 就可以

swaggerAutogen(outputFile, endpointsFiles, doc); // swaggerAutogen 的方法