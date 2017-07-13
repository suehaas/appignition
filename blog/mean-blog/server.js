/**
 * Created by suehaas on 7/13/17.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);

