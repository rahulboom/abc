var http=require('http');
var url=require("url")
var app=http.createServer(function(req,res){
    let query=url.parse(req.url, true).query;
    console.log("query:",query)
    
    res.writeHead(200,{'Content-Type': 'text/html'});
    if(req.url === "/"){
        res.write(`<h3>Welcome to my home page</h3>`)
    } else if(req.url==="/employees"){
        res.write(`<h3>hello employess</h3>`)
    }else if(req.url==="/users"){
        res.write(`<h3>Hello users</h3>`)
    }


    console.log(req.url)
    
    res.end()
    
})
const PORT=process.env.PORT || 5000
app.listen(PORT);
console.log(`App is running on ${PORT} port`);