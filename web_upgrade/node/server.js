//  supervisor server.js
const hostname = '0.0.0.0';
const port = 3000;


const express = require("express")
const app = express()


app.get("/joke1", (req, res, next) => {
    res.send("Why did the chicken cross the road?");
});


app.get("/", (req, res, next) => {
    res.send("nothing here");
});



// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is an endpoint!!!!!!");
})

app.get('*', function(req, res){
    res.status(404).send('node dont know this path :('+req.url);
    
  // res.status(404).sendFile('static/404.html', { root : __dirname});
});





// Server setup
app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

})