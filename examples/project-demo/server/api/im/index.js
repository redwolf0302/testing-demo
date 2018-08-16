const {getMessages, getFriends} = require('./dao');
const messages = (req, res) => {
    res.send(getMessages(req.params.fromId, req.params.toId))
};

const friends = (req, res) => {
    res.send(getFriends(req.params.userId));
};

module.exports = {messages, friends};