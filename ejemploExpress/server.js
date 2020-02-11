// es un servidor http
// es un middleware
// capas de middleware que se pueden mirar log4net, morgan, passport, session, etc

const express = require('express')
const bodyParser = require('body-parser')


const PORT = 8080

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

// para configurar archivos estaticos
app.use(express.static(__dirname + '/public'))
// en vez de esto
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/public/index.html')
// })

// app.get('/datos',(req,res)=>{
//     res.send('RUTA DATOS')
// })

//http://localhost:8080/datos/81616?nombre=juan&edad=23
app.get('/datos/:numero?',(req,res)=>{
    let numero = req.params.numero
    console.log(req.query)
    res.send('RUTA DATOS: ' + numero)
})

app.post('/datos',(req,res)=>{
    //console.log(req.body)
    res.send('Datos post recibidos')
})

app.delete('/datos',(req,res)=>{
    //console.log(req.body)
    res.send('Request delete recibidos')
})

app.put('/datos',(req,res)=>{
    //console.log(req.body)
    res.send('Request put recibidos')
})

app.post('/datos',(req,res)=>{
    res.send('Datos post recibidos')
})

app.get('*',(req,res)=>{
    res.send('RUTA NO IMPLEMENTADA')
})


app.listen(PORT, err =>{
    if(err) return console.log(`Error en servidor ${err}`)
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})