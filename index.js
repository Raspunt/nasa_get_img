const https = require('https');
const fs = require("fs");
const express = require("express");

const app =  express();

let port = 7000



function ServerStart(){


    app.get('/',(req,res) => {
        res.sendFile(__dirname + "/index.html");
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}



function GetRequest(){   
    https.get('https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY ', (resp) => {
        let data = '';
        
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            // console.log(JSON.parse(data).explanation);
            console.log(data);
        });
        
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
    
}

ServerStart()