const router = require('express').Router;
const Chat = require('../models/chat');


const chatRoutes = router();

function postChat(req, res) {
  const chat = new Chat();
  chat.from = req.user._id;
  chat.to = req.body.to;
  chat.message_body = req.body.message_body;

  return chat.save().then(() => {
    res.status(201).json({ message: 'Message sent!' });
  }).catch((err) => {
    res.status(400).send(err);
  });
}


chatRoutes.post('/api/chat', postChat);

module.exports = postChat;
