const router = require('express').Router({});
const im = require('./api/im');
const {userList, userInfo} = require('./api/user');


router.use((req, res, next) => {
    console.log(`access ${req.url} at ${Date.now()}`);
    next();
});


router.get('/user/list', userList);
router.get('/user/:userId', userInfo);
router.get('/im/:fromId/:toId', im);

module.exports = router;