const http = require('http')
const url = require('url')
const qs = require('querystring')
let em="a";
let p="b";
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var email=qs.parse(query)["eml"];
    em=email;
    var ps=qs.parse(query)["pass"];
    p=ps;
    response.write(email+" "+ps);
    response.end();  
    insertdata();
}
http.createServer(onRequest).listen(2001);
console.log("Server is running now....");
const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/local";
const name1 = new mongoose.Schema({Email: String,Password:String});
const Name= mongoose.model('Name',name1)

const db = async() =>{
    try{    
    console.log("entered")    
    const data=await mongoose.connect(urla,    
    {    
        useNewUrlParser: true,    
        useUnifiedTopology: true,    
        family: 4,    
    }
    )
    console.log("connected")
    }    
    catch(err){    
    console.log(err)    
    }    
}
db()
    const insertdata=async()=>{
        const cat = new Name({Email:em,Password:p});        
        cat.save().then(() => console.log('Saved in db'));        
        }