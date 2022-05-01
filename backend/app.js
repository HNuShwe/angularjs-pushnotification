const express = require("express");
const bodyParser = require("body-parser");
const pushnotification = require("./pushnotificationconfig");
const app = express();
// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get('/test',(req,res)=>{
    pushnotification.admin({
        info: "This is the info.",
        title: "This is the title."
    })
    res.send("done");
});

const port = process.env.PORT || 7000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);