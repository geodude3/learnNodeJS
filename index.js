const express = require('express');
const { appendFile } = require('fs');
const {readFile, readFileSync, read} = require('fs');
const app = express();

app.get('/', (request, response)=>{
    readFile('./home.html', 'utf8', (err, html)=>{
        
        if(err){
            response.status(500).send("sorry server error");
        }
        response.send(html);
    })
})
app.get('/ihsan', (request, response)=>{
    readFile('./ihsan.html', 'utf8', (err, html)=>{
        
        if(err){
            response.status(500).send("sorry server error");
        }
        response.send(html);
    })
})



app.listen(process.env.PORT || 3000, ()=>console.log("app launched"));