let express = require('express');
let bodypaser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
app.use(bodypaser.urlencoded({extended:true}));
app.use(bodypaser.json());

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/easy-notes',{useNewUrlParser:true, useFindAndModify: false,useUnifiedTopology: true });
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");


let apirouter = require('./api-routes');
app.use('/api',apirouter);

require('./note.routes')(app);

var port = process.env.port || 8080;
app.listen(port,function(){console.log('Listening server port '+port)});

