var express = require('express');
var jwt = require('jsonwebtoken');

var app = express();

const port=process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("Welcome Ms. Likhitha.. Suraj misses you alot..");
})


app.get('/token',function(req,res){
    var token=jwt.sign({username:"Suraj"},'supersecret',{expiresIn: 120});
    res.send(token);
});

app.post('/profile',function(req,res){
    res.send("POST is being called");
});

app.get('/api', function (req, res) {
    var token = req.query.token;
    jwt.verify(token, 'supersecret', function (err, decoded) {
        if (!err) {
            var secrets = {
                "accountNumber": "8971367444",
                "pin": "12345007",
                "account": "Finance"
            }
            res.json(secrets);
        }
        else {
            res.send(err);
        }
    })
})
app.listen(port);
