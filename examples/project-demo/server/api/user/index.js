const {getUsers, getUserById} = require('./dao');

const userList = (req, res) => {
    res.send(getUsers());
};

const userInfo = (req, res) => {
    res.send(getUserById(req.params.userId));
};
module.exports = {userList, userInfo};