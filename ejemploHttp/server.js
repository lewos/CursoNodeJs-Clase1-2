const http = require('http')
const PORT = process.env.app_port|| process.env.PORT || 8080

let visitas = 0
const server = http.createServer((req,res) =>{
    let url = req.url
    let metodo = req.method
    console.log(url +metodo)

    if(metodo == 'GET'){
        if(url == '/'){
            res.writeHead(200,{'content-type':'text/html'})
            //res.writeHead(200,{'content-type':'text/plain'})
        
            res.write('<h1 style="color:blue">Hola, soy http Server</h1>')
            res.write(`<h2 style="color:red"> FyH: ${new Date().toLocaleDateString()}</h2>`)
            res.write(`<p style="color:magenta">Visitas: ${visitas++}</p>`)
        
            res.end()
        }
        else if(url == '/datos'){
            res.writeHead(200,{'content-type':'text/html'})
            res.end(`RUTA DATOS`)
        }
        else {
            res.writeHead(200,{'content-type':'text/html'})
            res.end(`RUTA NO IMPLEMENTADA`)
        }
    }else{
        res.end(`Metodo no implementado`)
    }    
})

server.listen(PORT,err=>{
    // callback por error
    if(err)
        return console.log(`Error en servidor ${err}`)
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
}) 