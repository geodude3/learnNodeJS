//using promises
const express = require('express').promises;
const { appendFile } = require('fs');
const {readFile, readFileSync, read} = require('fs');

app.get('/', async (request, response)=>{
    
    response.send(await readFile('./home.html', 'utf8'), html);
   
})

app.listen(process.env.PORT || 3000, ()=>console.log("app launched"));