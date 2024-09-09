// export default getIndexData = ({$axios},inject)=>{
//     console.log(inject)
//     console.log("getIndexData")// 使用 params 来获取 URL 参数
//     // 模拟异步数据获取，例如从数据库
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = {
//           user: {
//             id: "123",
//             name: 'John Doe',
//             email: 'john@example.com'
//           }
//         };
//         resolve(data); // 数据获取成功，调用 resolve
//       }, 1000); // 模拟异步操作，例如数据库查询
//     });
// }

export default ({$axios},inject) =>{
  // 请求拦截器
  inject("getIndexData",()=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          user: {
            id: "123",
            name: 'John Doe',
            email: 'john@example.com'
          }
        };
        resolve(data); // 数据获取成功，调用 resolve
      }, 1000); // 模拟异步操作，例如数据库查询
    });
  })
}