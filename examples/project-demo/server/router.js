const router = require('express').Router({});
const {messages, friends} = require('./api/im');
const {userList, userInfo} = require('./api/user');


router.use((req, res, next) => {
    console.log(`access ${req.url} at ${Date.now()}`);
    next();
});

router.get('/user/list', userList);
router.get('/user/:userId', userInfo);
router.get('/im/messages/:fromId/:toId', messages);
router.get('/im/friends/:userId', friends);

module.exports = router;