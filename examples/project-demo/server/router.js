const router = require('express').Router({});

router.use((req, res, next) => {
    console.log(`access ${req.url} at ${Date.now()}`);
    next();
});
router.get('/user/list', () => {
});
router.get('/user/:userId', () => {
});

router.get('/im/:userId/:pageNo', () => {
});

module.exports = router;