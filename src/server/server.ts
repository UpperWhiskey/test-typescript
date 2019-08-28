import express = require('express');
// import app from '../app';

const app = express();

(async function serverApp() {

    const port: any = 3000 || process.env.port;
    
    console.log('>>> Inicializando servidor...')
    
    await app.listen(port, ()=>{        
        console.log('>>> Servidor executando na porta', port)
    })
    //HERE GOES SOME THINGS 
})()