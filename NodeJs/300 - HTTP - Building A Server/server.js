import http from "http"

const server = http.createServer((request, response)=>{
    
    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);


    const user= {
        name:"kala",
        place:"dholaa"
    }

    response.setHeader("Content-Type", "application/json")
    response.end(JSON.stringify(user))

})

server.listen(3001)


