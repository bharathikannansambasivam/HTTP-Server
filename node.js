import http from "http"

const server = http.createServer();
const gets =[]
const posts =[]


server.on("request",(req,res) => console.log(1));


server.on("request",(req,res) => {if 
    (req.method === "GET")gets.forEach(g=> g(req,res))});
server.on("request",(req,res) =>
 {if (req.method === "POST")posts.forEach(g=> g(req,res))});

server.get = f => gets.push(f);
server.post = f => posts.push(f);

server.get ((req,res) => res.write("received GET \n"))
server.get ((req,res) => res.end("received GET2"))

server.post ((req,res) => res.write("received post"))
server.post ((req,res) => res.end("received post"))

 server.listen(5500);


 console.log("Server is listening");