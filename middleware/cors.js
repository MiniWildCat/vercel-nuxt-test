const cors = require('cors')

// module.exports = function (req, res, next) {
//   cors({
//     origin: '*', // 允许来自 Qiankun 主应用的跨域请求
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })(req, res, next)
// }

export default function (req, res, next) {
  // req is the Node.js http request object
  // console.log(req.url)
  // next()

  cors({
    origin: 'http://localhost:5173', // 允许来自 Qiankun 主应用的跨域请求
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
  })(req, res, next)

  // req.rawHeaders["Access-Control-Allow-Origin"] =  '*'
  // req.rawHeaders["Access-Control-Allow-Headers"] =  'Origin, X-Requested-With, Content-Type, Accept'
  // // res.header("Access-Control-Allow-Origin", '*');
  // // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // console.log(req.client.headers)
  // // res["Access-Control-Allow-Origin"] =  '*'
  //   // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  // // }
  // // console.log(Object.keys(res),res._header)

  // // // res is the Node.js http response object

  // // // next is a function to call to invoke the next middleware
  // // // Don't forget to call next at the end if your middleware is not an endpoint!
  // next()
}