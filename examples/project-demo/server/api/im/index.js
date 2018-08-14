const {getMessages} = require('./dao');
module.exports = (req, res) => {
    res.send(getMessages(req.params.fromId, req.params.toId))
};