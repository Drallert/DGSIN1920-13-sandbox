var express = require("express")
var path = require("path");
var app = express();

app.get("/test",(req,res)=>{

    res.send("Wolas");

});

app.use("/",express.static(path.join(__dirname,"public")));

app.listen(process.env.PORT | 8080,()=>{
    console.log("Servidor listo");
}).on("error",(e) =>{
    console.error("Ha ocurrido un problema");
});

