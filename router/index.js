export default function({app}){
    app.router.beforeEach((to,from,next)=>{
        console.log("routerBeforeEach",to);
        next();
    })
}