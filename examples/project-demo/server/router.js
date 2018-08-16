const router = require('express').Router({});
const {messages, friends} = require('./api/im');
const {userList, userInfo} = require('./api/user');


router.use((req, res, next) => {
    console.log(`access ${req.url} at ${Date.now()}`);
    next();
});
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: true
}));
router.get('/user/list', userList);
router.get('/user/:userId', userInfo);
router.get('/im/messages/:fromId/:toId', messages);
router.all('/im/friends/:userId', friends);

module.exports = router;