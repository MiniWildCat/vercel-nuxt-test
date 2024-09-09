export default function({store,route,redirect,params,query}){
  let token = store.state.token;
  if(!token){
    // redirect('/list');
    console.log("没有token")
  }
   console.log(store.state,"middleware auth")
}
