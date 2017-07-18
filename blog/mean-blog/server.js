/**
 * Created by suehaas on 7/13/17.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/blogappignition', {
    useMongoClient: true
});

var PostSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: String,
    tag: {type: String, enum: ['DATA LAKES', 'LAMBDA ARCHITECTURE', 'SPARK', 'STATE']},
    posted: {type: Date, default: Date.now}
}, {collection: 'post'});

var PostModel = mongoose.model("PostModel", PostSchema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/blogpost", createPost);
app.get("/api/blogpost", getAllPosts);
app.delete("/api/blogpost/:id", deletePost);

function deletePost(req, res) {
    var postId = req.params.id;
    PostModel
        .remove({_id: postId})
        .then(
            function(status) {
                res.sendStatus(200);
            },
            function() {
                res.sendStatus(400);
            }
        );
}

function getAllPosts(req, res) {
    PostModel
        .find()
        .then(
            function(posts) {
                res.json(posts);
            },
            function(err) {
                res.sendStatus(400);
            }
        );
}

function createPost(req, res) {
    var post= req.body;
    console.log(post);
    PostModel
        .create(post)
        .then(
            function (postObj) {
                res.json(200);
            },
            function (error) {
                res.sendStatus(400);
            }
        );
}

app.listen(3000);

