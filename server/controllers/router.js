const express = require('express');
const router = express.Router();

const Post = require('../models/post');

router.post('/', (req, res) => {
    //const data = {"post": "hello world"};
    //console.log(req);
    const data = req.body;
    const newPost = Post.addPost(data);
    res.status(201).send(newPost);
});

router.post('/status/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const comment = req.body.comment;
    const newComment = Post.addComment(id, comment);
    res.status(200).send('Comment added to the JSON file');
})

module.exports = router;
